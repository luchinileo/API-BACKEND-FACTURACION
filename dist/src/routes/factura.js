"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_1 = require("../controllers/factura");
const router = (0, express_1.Router)();
router.get('/', factura_1.getFactura);
router.get('/:id', factura_1.getFacturaById);
router.post('/', factura_1.crearFactura);
exports.default = router;
//# sourceMappingURL=factura.js.map