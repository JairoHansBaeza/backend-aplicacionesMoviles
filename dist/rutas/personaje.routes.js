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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express_1 = require("express");
var personaje_model_1 = require("../../models/personaje.model");
var personajeRoutes = (0, express_1.Router)();
// TODO:
personajeRoutes.get('/page', function (req, res) {
    var personaje = personaje_model_1.Personaje.find();
    return res.json({
        ok: true,
        personaje: personaje
    });
});
personajeRoutes.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var personaje;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, personaje_model_1.Personaje.find()];
            case 1:
                personaje = _a.sent();
                return [2 /*return*/, res.json({
                        ok: true,
                        msj: "Get funcionando OK",
                        personaje: personaje
                    })];
        }
    });
}); });
personajeRoutes.post('/', function (request, response) {
    var data = request.body;
    var personaje = {
        nombre: data.nombre,
        nombreReal: data.nombreReal,
        edad: data.edad,
        imagen: data.imagen
    };
    personaje_model_1.Personaje.create(personaje).then(function (personajeDataDb) {
        console.log(personajeDataDb);
    })["catch"](function (error) {
        return response.json({
            ok: false,
            msj: 'Ha ocurrido un error, no se ha podido guardar el registro'
        });
    });
    return response.json({
        ok: true,
        msj: 'Post personajes funcionando correctamente'
    });
});
personajeRoutes.put('/:id', function (req, res) {
    var id = req.params.id;
    var personajeActualizado = {
        nombre: req.body.nombre,
        nombreReal: req.body.nombreReal,
        edad: req.body.edad,
        imagen: req.body.imagen
    };
    personaje_model_1.Personaje.findByIdAndUpdate(id, personajeActualizado).then(function (personajeDb) {
        return res.json({
            ok: true,
            personajeDb: personajeDb
        });
    });
});
personajeRoutes["delete"]('/', function (req, res) {
    var id = req.query.id;
    personaje_model_1.Personaje.findByIdAndDelete(id).then(function (personajeDb) {
        return res.json({
            ok: true,
            personajeDb: personajeDb
        });
    });
});
exports["default"] = personajeRoutes;
