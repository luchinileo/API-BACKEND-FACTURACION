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
exports.crearTelefono = exports.getTelefonoById = exports.getTelefonos = void 0;
const telefono_1 = require("../models/telefono");
const getTelefonos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const telefonos = yield telefono_1.Telefono.findAll();
        res.json(telefonos);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getTelefonos = getTelefonos;
const getTelefonoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const telefono = yield telefono_1.Telefono.findByPk(id);
        if (!telefono) {
            return res.status(400).json({ mensaje: 'No existe el telefono' });
        }
        res.json({ mensaje: 'Se encontro el telefono', telefono });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getTelefonoById = getTelefonoById;
const crearTelefono = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const telefono = yield telefono_1.Telefono.create(req.body);
        res.status(201).json(telefono);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearTelefono = crearTelefono;
//# sourceMappingURL=telefono.js.map