import { Router } from "express";
import { crearCliente, getCliente, getClienteById } from '../controllers/cliente';




const router = Router()

router.get('/', getCliente)
router.get('/:id', getClienteById)
router.post('/', crearCliente)

export default router;