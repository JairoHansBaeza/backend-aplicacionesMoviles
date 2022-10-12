import { Document, model, Schema } from "mongoose";

const personajeSchema = new Schema({
    nombre: {
        type: String,
        require: [true,'El campo nombre es obligatorio']
    },
    nombreReal: {
        type: String
    },
    edad: {
        type:Number
    },
    imagen: {
        type: String
    }
});

interface IPersonaje extends Document{
    nombre: string;
    nombreReal: string;
    edad: number;
    image: string;
}

export const Personaje = model<IPersonaje>('Personaje',personajeSchema)