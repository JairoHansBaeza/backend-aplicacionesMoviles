"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
const mongoose_1 = require("mongoose");
const personajeSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: [true, 'El campo nombre es obligatorio']
    },
    nombreReal: {
        type: String,
        require: [true, 'El campo nombre real es obligatorio']
    },
    edad: {
        type: Number,
        require: [true, 'El campo edad es obligatorio']
    },
    imagen: {
        type: String,
        require: [true, 'El campo imagen es obligatorio']
    }
});
exports.Personaje = (0, mongoose_1.model)('Personaje', personajeSchema);
