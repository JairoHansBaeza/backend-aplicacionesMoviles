import { Request, Response, Router } from "express";

const rutasDefecto = Router();

rutasDefecto.get('/',(req:Request,res:Response)=>{
    return res.json({
        ok: true,
        msj: 'Todo esta funcionando correctamente'
    });
});

export default rutasDefecto;