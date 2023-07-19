"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalleFactura_1 = require("../controllers/detalleFactura");
const router = (0, express_1.Router)();
router.get('/', detalleFactura_1.getDetalleFactura);
router.get('/:id', detalleFactura_1.getDetalleFacturaById);
router.post('/', detalleFactura_1.crearDetalleFactura);
exports.default = router;
//# sourceMappingURL=detalleFactura.js.map