const PurchaseRouter = require('express').Router();
const PurchaseController = require('../controller/purchase.controller');
const endQuery = require('../middleware/query/end.query');
const idQuery = require('../middleware/query/id.query');
const infoMod = require('../middleware/info.mod');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const methodQuery = require('../middleware/query/method.query');

PurchaseRouter.route('/')
              .get(
                infoMod,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await PurchaseController.getByQuery({...req.custom.query}, req.custom.info_mod);
                  res.set('X-Total-Amount', (await PurchaseController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

PurchaseRouter.route('/all')
              .get(
                infoMod,
                async (req, res) => {
                  const response = await PurchaseController.getAll(req.custom.info_mod);
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
                infoMod,
                async (req, res) => {
                  const response = await PurchaseController.getOneById(req.params.id, req.custom.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

PurchaseRouter.route('/support/:arg')
              .get(
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await PurchaseController.getSupport({...req.custom.query}, req.params.arg);
                  res.set('X-Total-Amount', (await PurchaseController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

module.exports = PurchaseRouter;