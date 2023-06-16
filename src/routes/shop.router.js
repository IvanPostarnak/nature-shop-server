const ShopController = require('../controller/shop.controller');
const idQuery = require('../middleware/idQuery');
const infoQuery = require('../middleware/infoQuery');
const ShopRouter = require('express').Router();

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