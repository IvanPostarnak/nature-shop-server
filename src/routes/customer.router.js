const CustomerRouter = require('express').Router();
const CustomerController = require('../controller/customer.controller');
const infoQuery = require('../middleware/infoQuery');

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

module.exports = CustomerRouter;