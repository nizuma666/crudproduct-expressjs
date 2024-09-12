const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createProduct);
router.get('/', verifyToken, getAllProducts);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
