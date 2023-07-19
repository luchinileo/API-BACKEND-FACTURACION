"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const telefono_1 = require("../controllers/telefono");
const router = (0, express_1.Router)();
router.get('/', telefono_1.getTelefonos);
router.get('/:id', telefono_1.getTelefonoById);
router.post('/', telefono_1.crearTelefono);
exports.default = router;
//# sourceMappingURL=telefono.js.map