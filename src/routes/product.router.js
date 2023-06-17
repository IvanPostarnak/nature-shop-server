const ProductRouter = require('express').Router();
const ProductController = require('../controller/product.controller');
const infoMod = require('../middleware/info.mod');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const endQuery = require('../middleware/query/end.query');
const nameQuery = require('../middleware/query/name.query');
const idQuery = require('../middleware/query/id.query');
const methodQuery = require('../middleware/query/method.query');

ProductRouter.route('/')
             .get(
               infoMod,
               startQuery,
               endQuery,
               limitQuery,
               nameQuery,
               methodQuery,
               async (req, res) => {
                 const response = await ProductController.getByQuery({...req.custom.query}, req.custom.info_mod);
                 res.set('X-Total-Amount', (await ProductController.getTotalCount()).body.total_count);
                 res.set('X-Current-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );

ProductRouter.route('/all')
             .get(
               infoMod,
               async (req, res) => {
                 const response = await ProductController.getAll(req.custom.info_mod);
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
               infoMod,
               async (req, res) => {
                 const response = await ProductController.getOneById(req.params.id, req.custom.info_mod);
                 res.status(response.code).json(response.body);
               }
             );

ProductRouter.route('/support/:arg')
             .get(
               idQuery,
               async (req, res) => {
                 const response = await ProductController.getSupport({...req.custom.query}, req.params.arg);
                 res.set('X-Total-Amount', (await ProductController.getTotalCount()).body.total_count);
                 res.set('X-Current-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );             

module.exports = ProductRouter;