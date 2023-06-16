const EmployeeController = require('../controller/employee.controller');
const infoQuery = require('../middleware/infoQuery');
const EmployeeRouter = require('express').Router();

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

module.exports = EmployeeRouter;