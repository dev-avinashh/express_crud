import express from 'express';
import * as productController from '../controllers/product.controller.js';

const router = express.Router();

// GET all products
router.get('/', productController.getAllProducts);

// GET product by ID
router.get('/:id', productController.getProductById);

// POST create product
router.post('/', productController.createProduct);

// PUT update product
router.put('/:id', productController.updateProduct);

// DELETE product
router.delete('/delete/:id', productController.deleteProduct);

export default router;
