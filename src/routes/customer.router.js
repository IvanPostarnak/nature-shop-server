const CustomerRouter = require('express').Router();
const CustomerController = require('../controller/customer.controller');
const endQuery = require('../middleware/endQuery');
const idQuery = require('../middleware/idQuery');
const infoQuery = require('../middleware/infoQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');

CustomerRouter.route('/')
              .get(
                infoQuery,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                async (req, res) => {
                  const response = await CustomerController.getByQuery({
                    id: req.id,
                    start: req.start,
                    end: req.end,
                    limit: req.limit,
                  }, req.info_mod);
                  res.set('X-Total-Amount', (await CustomerController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

CustomerRouter.route('/all')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await CustomerController.getAll(req.info_mod);
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
                infoQuery,
                async (req, res) => {
                  const response = await CustomerController.getOneById(req.params.id, req.info_mod);
                  res.status(response.code).json(response.body);
                }
              );

CustomerRouter.route('/support/:arg')
              .get(
                idQuery,
                async (req, res) => {
                  const response = await CustomerController.getSupport({
                    id: req.id
                  }, req.params.arg);
                  res.set('X-Total-Amount', (await CustomerController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );  

module.exports = CustomerRouter;