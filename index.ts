import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./clases/server";
import rutasDefecto from "./routes/default.routes";
import personajeRoutes from "./routes/personaje.routes";
const server = new Server();

server.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use('/',rutasDefecto);
server.app.use('/personaje',personajeRoutes);

mongoose.connect('mongodb://localhost:27017/personajesDb',(error)=>{
    if(error){
        throw error;
    }
    console.log('Base de datos online')
});

server.Start(()=>{
    console.log(`Servidor corriendo en el puerto: ${server.port}`)
});