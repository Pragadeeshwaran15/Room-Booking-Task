import homeController from "../controller/HomePage.js";
import express from 'express'
import roomRoutes from './Room.js'

let router=express.Router()
//route for home page
router.get('/',homeController.homePage)
//route for room data pages

router.use('/room',roomRoutes)

export default router