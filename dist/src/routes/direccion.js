"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const direccion_1 = require("../controllers/direccion");
const router = (0, express_1.Router)();
router.get('/', direccion_1.getDireccion);
router.get('/:id', direccion_1.getDireccionById);
router.post('/', direccion_1.crearDireccion);
exports.default = router;
//# sourceMappingURL=direccion.js.map