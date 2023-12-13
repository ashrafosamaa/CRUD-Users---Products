import { Router } from "express";
import * as pc from "./product.controller.js"

const router = Router();

router.post('/addProduct', pc.addProduct)

router.delete('/deleteProduct', pc.deleteProduct)

router.put('/updateProduct', pc.updateProduct)

router.get('/listProducts', pc.listProducts)

router.get('/getProductAndUsers', pc.getProductAndUsers)

router.get('/descProducts', pc.descProducts)

export default router