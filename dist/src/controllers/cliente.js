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
exports.crearCliente = exports.getClienteById = exports.getCliente = void 0;
const cliente_1 = require("../models/cliente");
const getCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield cliente_1.Cliente.findAll();
        res.json(clientes);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getCliente = getCliente;
const getClienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const cliente = yield cliente_1.Cliente.findByPk(id);
        if (!cliente) {
            return res.status(400).json({ mensaje: 'No existe el cliente' });
        }
        res.json({ mensaje: 'Se encontro el cliente', cliente });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getClienteById = getClienteById;
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cliente = yield cliente_1.Cliente.create(req.body);
        res.status(201).json(cliente);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearCliente = crearCliente;
//# sourceMappingURL=cliente.js.map