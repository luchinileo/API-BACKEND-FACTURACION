"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const router = (0, express_1.Router)();
router.get('/', cliente_1.getCliente);
router.get('/:id', cliente_1.getClienteById);
router.post('/', cliente_1.crearCliente);
exports.default = router;
//# sourceMappingURL=cliente%20copy.js.map