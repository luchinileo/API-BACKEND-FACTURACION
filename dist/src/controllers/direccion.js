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
exports.crearDireccion = exports.getDireccionById = exports.getDireccion = void 0;
const direccion_1 = require("../models/direccion");
const getDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const direccion = yield direccion_1.Direccion.findAll();
        res.json(direccion);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getDireccion = getDireccion;
const getDireccionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const direccion = yield direccion_1.Direccion.findByPk(id);
        if (!direccion) {
            return res.status(400).json({ mensaje: 'No existe la direccion' });
        }
        res.json({ mensaje: 'Se encontro la direccion', direccion });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getDireccionById = getDireccionById;
const crearDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const direccion = yield direccion_1.Direccion.create(req.body);
        res.status(201).json(direccion);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearDireccion = crearDireccion;
//# sourceMappingURL=direccion.js.map