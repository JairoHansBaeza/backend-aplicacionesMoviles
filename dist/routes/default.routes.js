"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutasDefecto = (0, express_1.Router)();
rutasDefecto.get('/', (req, res) => {
    return res.json({
        ok: true,
        msj: 'Todo esta funcionando correctamente'
    });
});
exports.default = rutasDefecto;
