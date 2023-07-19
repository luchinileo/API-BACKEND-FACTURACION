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
exports.crearDetalleFactura = exports.getDetalleFacturaById = exports.getDetalleFactura = void 0;
const detalleFactura_1 = require("../models/detalleFactura");
const getDetalleFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dtfacturas = yield detalleFactura_1.DtFactura.findAll();
        res.json(dtfacturas);
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.getDetalleFactura = getDetalleFactura;
const getDetalleFacturaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { id } = req.params;
    try {
        const dtfactura = yield detalleFactura_1.DtFactura.findByPk(id);
        if (!dtfactura) {
            return res.status(400).json({ mensaje: 'No existe la factura' });
        }
        res.json({ mensaje: 'Se encontro la factura', dtfactura });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getDetalleFacturaById = getDetalleFacturaById;
const crearDetalleFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dtfactura = yield detalleFactura_1.DtFactura.create(req.body);
        res.status(201).json(dtfactura);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.crearDetalleFactura = crearDetalleFactura;
//# sourceMappingURL=detalleFactura.js.map