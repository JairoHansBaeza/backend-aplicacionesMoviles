"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaje_model_1 = require("../models/personaje.model");
const personajeRoutes = (0, express_1.Router)();
personajeRoutes.get('/page/:numero', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.params.numero);
    let skip = (page - 1) * perPage;
    const personaje = yield personaje_model_1.Personaje.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        personaje
    });
}));
personajeRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personaje = yield personaje_model_1.Personaje.find();
    return res.json({
        ok: true,
        personaje
    });
}));
personajeRoutes.post('/', (request, response) => {
    const data = request.body;
    const personaje = {
        nombre: data.nombre,
        nombreReal: data.nombreReal,
        edad: data.edad,
        imagen: data.imagen
    };
    personaje_model_1.Personaje.create(personaje).then(personajeDataDb => {
        return response.json(personajeDataDb);
    }).catch(error => {
        return response.json({
            ok: false,
            msj: 'Ha ocurrido un error, no se ha podido guardar el registro'
        });
    });
});
personajeRoutes.put('/:id', (req, res) => {
    const id = req.params.id;
    const personajeActualizado = {
        nombre: req.body.nombre,
        nombreReal: req.body.nombreReal,
        edad: req.body.edad,
        imagen: req.body.imagen
    };
    personaje_model_1.Personaje.findByIdAndUpdate(id, personajeActualizado).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    });
});
personajeRoutes.delete('/:id', (req, res) => {
    const id = req.query.id;
    personaje_model_1.Personaje.findByIdAndDelete(id).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    });
});
exports.default = personajeRoutes;
