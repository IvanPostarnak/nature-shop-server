const ProductController = require('../controller/product.controller');
const ProductRouter = require('express').Router();
const infoQuery = require('../middleware/infoQuery');

ProductRouter.route('/all')
             .get(
               infoQuery,
               async (req, res) => {
                 const response = await ProductController.getAll(req.info_mod);
                 res.set('X-Total-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );

ProductRouter.route('/total_count')
             .get(async (req, res) => {
               const response = await ProductController.getTotalCount();
               res.status(response.code).json(response.body);
             });

ProductRouter.route('/:id')
             .get(
               infoQuery,
               async (req, res) => {
                 const response = await ProductController.getOneById(req.params.id, req.info_mod);
                 res.status(response.code).json(response.body);
               }
             );

ProductRouter.route('/support/:arg')
             .get(async (req, res) => {
               const response = await ProductController.getSupport(req.params.arg);
               res.set('X-Total-Amount', response.count);
               res.status(response.code).json(response.body);
             });             

module.exports = ProductRouter;