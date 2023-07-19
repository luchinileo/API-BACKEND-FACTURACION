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
exports.crearFactura = exports.getFacturaById = exports.getFactura = void 0;
const factura_1 = require("../models/factura");
const cliente_1 = require("../models/cliente");
const getFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facturas = yield factura_1.Factura.findAll();
        res.json(facturas);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getFactura = getFactura;
const getFacturaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const factura = yield factura_1.Factura.findByPk(id);
        if (!factura) {
            return res.status(400).json({ mensaje: 'No existe la factura' });
        }
        const cliente = yield cliente_1.Cliente.findByPk(factura === null || factura === void 0 ? void 0 : factura.nro_cliente);
        res.json({ mensaje: 'Se encontro la factura', factura, cliente });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getFacturaById = getFacturaById;
const crearFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const factura = yield factura_1.Factura.create(req.body);
        res.status(201).json(factura);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearFactura = crearFactura;
//# sourceMappingURL=factura.js.map