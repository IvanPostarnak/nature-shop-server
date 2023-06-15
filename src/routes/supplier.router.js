const SupplierRouter = require('express').Router();
const SupplierController = require('../controller/supplier.controller');

SupplierRouter.route('/all')
              .get(async (req, res) => {
                const response = await SupplierController.getAll();
                res.set('X-Total-Amount', response.count);
                res.status(response.code).json(response.body);
              });

SupplierRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await SupplierController.getTotalCount();
                res.status(response.code).json(response.body);
              });

SupplierRouter.route('/:id')
              .get(async (req, res) => {
                const response = await SupplierController.getOneById(req.params.id);
                res.status(response.code).json(response.body);
              });

module.exports = SupplierRouter;