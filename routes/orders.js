const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.get('/', OrderController.list);
router.post('/create', OrderController.placeOrder);
router.get('/:orderId', OrderController.get);
router.param('orderId', OrderController.load);
module.exports = router;

// config.jwtMiddleware,
// validate(paramValidation.createOrder),
// const temp1 = {
//   billingAddress: {
//     name: 'ldfjdlsjf',
//     email: 'flsdjf@lsjf.com',
//     postCode: '2321',
//     district: 'Sherpur',
//     country: 'BD'
//   },
//   shippingMethod: 'ups',
//   paymentMethod: 'skrill'
// };
