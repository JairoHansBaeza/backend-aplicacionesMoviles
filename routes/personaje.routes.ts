import { Request, Response, Router } from "express";
import { Personaje } from "../models/personaje.model";

const personajeRoutes = Router();

personajeRoutes.get('/page/:numero',async(req:Request,res:Response)=>{
    let perPage = 5;
    let page = Number(req.params.numero);
    let skip = (page-1)*perPage;
    const personaje = await Personaje.find().skip(skip).limit(perPage)

    return res.json({
        ok:true,
        personaje
    })
})

personajeRoutes.get('/', async(req:Request,res:Response)=>{

    const personaje = await Personaje.find();
    
    return res.json({
        ok:true,
        personaje
    })
})

personajeRoutes.post('/',(request: Request, response: Response)=>{
    const data = request.body;

    const personaje = {
        nombre: data.nombre,
        nombreReal: data.nombreReal,
        edad: data.edad,
        imagen: data.imagen
    };

    Personaje.create(personaje).then(personajeDataDb =>{
        console.log(personajeDataDb);
    }).catch(error => {
        return response.json({
            ok: false,
            msj: 'Ha ocurrido un error, no se ha podido guardar el registro'
        });
    })

    return response.json({
        ok: true,
        msj: 'Post personajes funcionando correctamente'
    });
});

personajeRoutes.put('/:id', (req:Request, res:Response)=>{

    const id = req.params.id;

    const personajeActualizado = {
        nombre: req.body.nombre,
        nombreReal: req.body.nombreReal,
        edad: req.body.edad,
        imagen: req.body.imagen
    } 

    Personaje.findByIdAndUpdate(id,personajeActualizado).then(personajeDb=>{
        return res.json({
            ok:true,
            personajeDb
        })
    })
})

personajeRoutes.delete('/', (req:Request, res:Response)=>{
    const id = req.query.id;

    Personaje.findByIdAndDelete(id).then(personajeDb=>{
        return res.json({
            ok:true,
            personajeDb
        })
    });

})


export default personajeRoutes;