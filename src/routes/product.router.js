const ProductController = require('../controller/product.controller');

const ProductRouter = require('express').Router();

ProductRouter.route('/basic')
             .get(async (req, res) => {
               const response = await ProductController.getBasic();
               res.set('X-Total-Amount', response.count);
               res.status(response.code).send(response.body);
             });

ProductRouter.route('/all')
             .get(async (req, res) => {
               const response = await ProductController.getAll();
               res.set('X-Total-Amount', response.count);
               res.status(response.code).send(response.body);
             });

ProductRouter.route('/total_count')
             .get(async (req, res) => {
               const response = await ProductController.getTotalCount();
               res.status(response.code).send(response.body);
             });

ProductRouter.route('/support/:arg')
             .get(async (req, res) => {
               const response = await ProductController.getSupport(req.params.arg);
               res.set('X-Total-Amount', response.count);
               res.status(response.code).send(response.body);
             });             

module.exports = ProductRouter;