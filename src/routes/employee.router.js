const EmployeeRouter = require('express').Router();
const EmployeeController = require('../controller/employee.controller');
const endQuery = require('../middleware/query/end.query');
const idQuery = require('../middleware/query/id.query');
const infoMod = require('../middleware/info.mod');
const limitQuery = require('../middleware/query/limit.query');
const startQuery = require('../middleware/query/start.query');
const methodQuery = require('../middleware/query/method.query');

EmployeeRouter.route('/')
              .get(
                infoMod,
                idQuery,
                startQuery,
                endQuery,
                limitQuery,
                methodQuery,
                async (req, res) => {
                  const response = await EmployeeController.getByQuery({...req.custom.query}, req.custom.info_mod);
                  res.set('X-Total-Amount', (await EmployeeController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

EmployeeRouter.route('/all')
              .get(
                infoMod,
                async (req, res) => {
                  const response = await EmployeeController.getAll(req.custom.info_mod);
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
                infoMod,
                async (req, res) => {
                  const response = await EmployeeController.getOneById(req.params.id, req.custom.info_mod);
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
                  const response = await EmployeeController.getSupport({...req.custom.query}, req.params.arg);
                  res.set('X-Total-Amount', (await EmployeeController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

module.exports = EmployeeRouter;