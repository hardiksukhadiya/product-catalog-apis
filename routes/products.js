const express = require('express');
const router = express.Router();
const config = require('../config/index');
const ProductController = require('../controllers/ProductController');
router
  .route('/')
  /** GET /api/products - Get list of products */
  .get(ProductController.list);

module.exports = router;
