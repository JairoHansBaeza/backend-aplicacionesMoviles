import { Document, model, Schema } from "mongoose";

const personajeSchema = new Schema({
    nombre: {
        type: String,
        require: [true,'El campo nombre es obligatorio']
    },
    nombreReal: {
        type: String,
        require: [true,'El campo nombre real es obligatorio']
    },
    edad: {
        type:Number,
        require: [true,'El campo edad es obligatorio']
    },
    imagen: {
        type: String,
        require: [true,'El campo imagen es obligatorio']
    }
});

interface IPersonaje extends Document{
    nombre: string;
    nombreReal: string;
    edad: number;
    image: string;
}

export const Personaje = model<IPersonaje>('Personaje',personajeSchema)