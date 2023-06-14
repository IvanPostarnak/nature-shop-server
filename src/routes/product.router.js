const ProductController = require('../controller/product.controller');
const ProductRouter = require('express').Router();
const infoQuery = require('../middleware/infoQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');
const endQuery = require('../middleware/endQuery');
const nameQuery = require('../middleware/nameQuery');
const idQuery = require('../middleware/idQuery');

ProductRouter.route('/')
             .get(
               infoQuery,
               startQuery,
               endQuery,
               limitQuery,
               nameQuery,
               async (req, res) => {
                 const response = await ProductController.getByQuery({
                  start: req.start,
                  end: req.end,
                  limit: req.limit,
                  name: req.name
                 }, req.info_mod);
                 res.set('X-Total-Amount', (await ProductController.getTotalCount()).body.total_count);
                 res.set('X-Current-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );

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
             .get(
               idQuery,
               async (req, res) => {
                 const response = await ProductController.getSupport({
                  id: req.id
                 }, req.params.arg);
                 res.set('X-Total-Amount', (await ProductController.getTotalCount()).body.total_count);
                 res.set('X-Current-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );             

module.exports = ProductRouter;