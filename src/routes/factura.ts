import { Router } from "express"; 
import { crearFactura, getFacturaById, getFactura } from "../controllers/factura"; 

const router = Router();


router.get('/',getFactura)
router.get('/:id', getFacturaById)
router.post('/', crearFactura)

export default router;