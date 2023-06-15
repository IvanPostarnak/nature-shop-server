const SupplierRouter = require('express').Router();
const SupplierController = require('../controller/supplier.controller');

SupplierRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await SupplierController.getTotalCount();
                res.status(response.code).json(response.body);
              });

module.exports = SupplierRouter;