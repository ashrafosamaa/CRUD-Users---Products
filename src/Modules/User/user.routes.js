import { Router } from "express";
import * as uc from "./user.controller.js"

const router = Router();

router.post('/signUp', uc.signUp)

router.get('/signIn', uc.signIn)

router.put('/updateUser', uc.updateUser)

router.delete('/deleteUser', uc.deleteUser)

router.get('/findUserOne', uc.findUserOne)

router.get('/findUserTwo', uc.findUserTwo)

router.get('/listUsers', uc.listUsers)

router.get('/getUsersAndProducts', uc.getUsersAndProducts)

export default router