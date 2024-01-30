import express from 'express'
import roomController from '../controller/Room.js'

const route=express.Router()

route.get('/',roomController.bookedRoom)
route.post('/',roomController.createRoom)
route.get('/allcustomer',roomController.allCustomerData)
route.put('/:id',roomController.Booking)
route.delete('/:id',roomController.deleteById)

export default route