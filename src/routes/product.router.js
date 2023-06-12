const ProductController = require('../controller/product.controller');

const ProductRouter = require('express').Router();

ProductRouter.route('/total_count')
             .get(async (req, res) => {
              const response = await ProductController.getTotalCount();
              res.status(response.code).send(response.body);
             })

module.exports = ProductRouter;