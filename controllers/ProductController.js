const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const Product = require('../models/Product');



/**
 * Get product list.
 * @property {number} req.query.skip - Number of products to be skipped.
 * @property {number} req.query.limit - Limit number of products to be returned.
 * @returns {Product[]}
 */
exports.list = function (req, res, next) {
  console.log(req.query);
  const {
    category = '',
    brand = '',
    sort = 'quantity',
    sorder = 'desc',
    limit = 50,
    skip = 0
  } = req.query;
  Product.list({category, brand, sort, sorder, limit, skip })
    .then(products => res.json(products))
    .catch(e => next(e));
};

/**
 * Delete Product.
 * @returns {Product}
 */
exports.remove = function (req, res, next) {
  const product = req.product;
  product
    .remove()
    .then(deletedProduct => res.json(deletedProduct))
    .catch(e => next(e));
};
