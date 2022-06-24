import { Router } from 'express'
import  {postProductController, getProductController, getFormController}  from '../controller/productsController.js'

const router = Router()

router.get('/', getFormController )
router.get('/productos', getProductController)
router.post('/productos', postProductController)

export default router