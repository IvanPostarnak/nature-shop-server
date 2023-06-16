const PurchaseController = require('../controller/purchase.controller');
const PurchaseRouter = require('express').Router();
const endQuery = require('../middleware/endQuery');
const idQuery = require('../middleware/idQuery');
const infoQuery = require('../middleware/infoQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');

PurchaseRouter.route('/')
              .get(
                infoQuery,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                async (req, res) => {
                  const response = await PurchaseController.getByQuery({
                    id: req.id,
                    start: req.start,
                    end: req.end,
                    limit: req.limit
                  }, req.info_mod);
                  res.set('X-Total-Amount', (await PurchaseController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

PurchaseRouter.route('/all')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await PurchaseController.getAll(req.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

PurchaseRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await PurchaseController.getTotalCount();
                res.status(response.code).json(response.body);
              });

PurchaseRouter.route('/:id')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await PurchaseController.getOneById(req.params.id, req.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

module.exports = PurchaseRouter;