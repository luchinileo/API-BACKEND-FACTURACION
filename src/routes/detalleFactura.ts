import { Router } from "express"; 
import { getDetalleFactura, getDetalleFacturaById, crearDetalleFactura } from "../controllers/detalleFactura";

const router = Router();


router.get('/',getDetalleFactura)
router.get('/:id', getDetalleFacturaById)
router.post('/', crearDetalleFactura)

export default router;