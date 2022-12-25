import {Router} from 'express'
import { createCard, getCards } from '../controller/card.js'
import { createCustomer, deleteCustomer, getCustomers } from '../controller/customer.js'
export const router = Router()

router.post('/customer' , createCustomer)
router.get('/customer' , getCustomers)
router.delete('/customer/:customerId' , deleteCustomer)

// *****************************************  Card APIs ********************************************

router.post('/card' , createCard)
router.get('/card' , getCards)