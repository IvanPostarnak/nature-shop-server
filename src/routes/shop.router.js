const ShopRouter = require('express').Router();
const ShopController = require('../controller/shop.controller');
const endQuery = require('../middleware/query/end.query');
const idQuery = require('../middleware/query/id.query');
const infoMod = require('../middleware/info.mod');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const methodQuery = require('../middleware/query/method.query');

ShopRouter.route('/')
          .get(
            infoMod,
            idQuery,
            startQuery,
            endQuery,
            limitQuery,
            methodQuery,
            async (req, res) => {
              const response = await ShopController.getByQuery({...req.custom.query}, req.custom.info_mod);
              res.set('X-Total-Amount', (await ShopController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', res.count);
              res.status(response.code).json(response.body);
            }
          );

ShopRouter.route('/all')
          .get(
            infoMod,
            async (req, res) => {
              const response = await ShopController.getAll(req.custom.info_mod);
              res.set('X-Total-Amount', res.count);
              res.status(response.code).json(response.body);
            }
          );

ShopRouter.route('/total_count')
          .get(async (req, res) => {
            const response = await ShopController.getTotalCount();
            res.status(response.code).json(response.body);
          });

ShopRouter.route('/support/:arg')
          .get(
            idQuery,
            async (req, res) => {
              const response = await ShopController.getSupport({...req.custom.query}, req.params.arg);
              res.set('X-Total-Amount', (await ShopController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', response.count);
              res.status(response.code).json(response.body);
            }
          );

ShopRouter.route('/:id')
          .get(
            infoMod,
            async (req, res) => {
              const response = await ShopController.getOneById(req.params.id, req.custom.info_mod);
              res.status(response.code).json(response.body);
            }
          );

module.exports = ShopRouter;