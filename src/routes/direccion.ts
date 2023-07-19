import { Router } from "express";
import { crearDireccion, getDireccion, getDireccionById } from '../controllers/direccion';




const router = Router()

router.get('/', getDireccion)
router.get('/:id', getDireccionById)
router.post('/', crearDireccion)

export default router;