"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
const router = (0, express_1.Router)();
router.get('/', producto_1.getProductos);
router.get('/:id', producto_1.getProductoById);
router.post('/', producto_1.crearProducto);
router.delete('/:id', producto_1.deleteProductoById);
exports.default = router;
//# sourceMappingURL=producto.js.map