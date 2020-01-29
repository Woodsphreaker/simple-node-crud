import { Router } from 'express'

// controllers
import userController from './app/controllers/userController'
import productController from './app/controllers/productController'

const router = Router()

// Users
router.get('/user', userController.index)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.put('/user', userController.update)
router.delete('/user/:id', userController.destroy)

// Products
router.get('/product', productController.index)
router.get('/product/:id', productController.show)
router.post('/product', productController.create)
router.put('/product/:id', productController.update)
router.delete('/product/:id', productController.destroy)

export default router
