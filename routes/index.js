const express = require('express');
const router = express.Router();
const config = require('../config/index');

const productsRoutes = require('./products');
const ordersRoutes = require('./orders');
const cartRoutes = require('./cart');

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.json({ message: 'welcome to product catalog APIs' });
});


// we can add expressjwt middleware for authentication as well
router.use('/products', productsRoutes);
router.use('/cart', cartRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
