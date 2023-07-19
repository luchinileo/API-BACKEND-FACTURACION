import { Router } from "express";
import { crearProducto, deleteProductoById, getProductoById, getProductos } from '../controllers/producto';




const router = Router()

router.get('/', getProductos)
router.get('/:id', getProductoById)
router.post('/',crearProducto )
router.delete('/:id',deleteProductoById)

export default router;