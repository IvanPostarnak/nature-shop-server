const CustomerRouter = require('express').Router();
const CustomerController = require('../controller/customer.controller');
const endQuery = require('../middleware/query/end.query');
const idQuery = require('../middleware/query/id.query');
const infoMod = require('../middleware/info.mod');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const methodQuery = require('../middleware/query/method.query');

CustomerRouter.route('/')
              .get(
                infoMod,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await CustomerController.getByQuery({...req.custom.query}, req.custom.info_mod);
                  res.set('X-Total-Amount', (await CustomerController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

CustomerRouter.route('/all')
              .get(
                infoMod,
                async (req, res) => {
                  const response = await CustomerController.getAll(req.custom.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

CustomerRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await CustomerController.getTotalCount();
                res.status(response.code).json(response.body);
              });

CustomerRouter.route('/:id')
              .get(
                infoMod,
                async (req, res) => {
                  const response = await CustomerController.getOneById(req.params.id, req.custom.info_mod);
                  res.status(response.code).json(response.body);
                }
              );

CustomerRouter.route('/support/:arg')
              .get(
                idQuery,
                async (req, res) => {
                  const response = await CustomerController.getSupport({...req.custom.query}, req.params.arg);
                  res.set('X-Total-Amount', (await CustomerController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );  

module.exports = CustomerRouter;