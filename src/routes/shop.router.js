const ShopController = require('../controller/shop.controller');
const endQuery = require('../middleware/endQuery');
const idQuery = require('../middleware/idQuery');
const infoQuery = require('../middleware/infoQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');
const ShopRouter = require('express').Router();

ShopRouter.route('/')
          .get(
            infoQuery,
            idQuery,
            startQuery,
            endQuery,
            limitQuery,
            async (req, res) => {
              const response = await ShopController.getByQuery({
                id: req.id,
                start: req.start,
                end: req.end,
                limit: req.limit
              }, req.info_mod);
              res.set('X-Total-Amount', (await ShopController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', res.count);
              res.status(response.code).json(response.body);
            }
          );

ShopRouter.route('/all')
          .get(
            infoQuery,
            async (req, res) => {
              const response = await ShopController.getAll(req.info_mod);
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
              const response = await ShopController.getSupport({
                id: req.id
              }, req.params.arg);
              res.set('X-Total-Amount', (await ShopController.getTotalCount()).body.total_count);
              res.set('X-Current-Amount', response.count);
              res.status(response.code).json(response.body);
            }
          );

ShopRouter.route('/:id')
          .get(
            infoQuery,
            async (req, res) => {
              const response = await ShopController.getOneById(req.params.id, req.info_mod);
              res.status(response.code).json(response.body);
            }
          );

module.exports = ShopRouter;