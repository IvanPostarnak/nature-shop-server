const EmployeeController = require('../controller/employee.controller');
const EmployeeRouter = require('express').Router();


EmployeeRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await EmployeeController.getTotalCount();
                res.status(response.code).json(response.body);
              });

module.exports = EmployeeRouter;