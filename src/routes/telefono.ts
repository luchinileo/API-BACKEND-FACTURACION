import { Router } from "express";
import { crearTelefono,getTelefonoById,getTelefonos} from '../controllers/telefono';




const router = Router()

router.get('/',getTelefonos)
router.get('/:id', getTelefonoById)
router.post('/', crearTelefono)

export default router;