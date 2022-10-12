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
        type: String
    },
    edad: {
        type: Number
    },
    imagen: {
        type: String
    }
});
exports.Personaje = (0, mongoose_1.model)('Personaje', personajeSchema);
