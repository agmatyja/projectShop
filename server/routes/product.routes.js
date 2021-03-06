const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');

// get single product
router.route('/products/:id').get(ProductController.getProduct);

// get products by range
router.route('/products/range/:startAt/:limit/:sort').get(ProductController.getProductsByRange);

module.exports = router;