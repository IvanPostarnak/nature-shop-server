const EmployeeRouter = require('express').Router();
const EmployeeController = require('../controller/employee.controller');
const endQuery = require('../middleware/endQuery');
const idQuery = require('../middleware/idQuery');
const infoQuery = require('../middleware/infoQuery');
const limitQuery = require('../middleware/limitQuery');
const startQuery = require('../middleware/startQuery');
const methodQuery = require('../middleware/methodQuery');

EmployeeRouter.route('/')
              .get(
                infoQuery,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await EmployeeController.getByQuery({
                    id: req.id,
                    start: req.start,
                    end: req.end,
                    limit: req.limit,
                    method: req.method
                  }, req.info_mod);
                  res.set('X-Total-Amount', (await EmployeeController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

EmployeeRouter.route('/all')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await EmployeeController.getAll(req.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

EmployeeRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await EmployeeController.getTotalCount();
                res.status(response.code).json(response.body);
              });

EmployeeRouter.route('/:id')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await EmployeeController.getOneById(req.params.id, req.info_mod);
                  res.status(response.code).json(response.body);
                }
              );

EmployeeRouter.route('/support/:arg')
              .get(
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await EmployeeController.getSupport({
                    id: req.id,
                    start: req.start,
                    end: req.end,
                    limit: req.limit,
                    method: req.method
                  }, req.params.arg);
                  res.set('X-Total-Amount', (await EmployeeController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

module.exports = EmployeeRouter;