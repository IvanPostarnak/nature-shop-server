const SupplierRouter = require('express').Router();
const SupplierController = require('../controller/supplier.controller');
const idQuery = require('../middleware/idQuery');
const nameQuery = require('../middleware/nameQuery');
const methodQuery = require('../middleware/methodQuery');

SupplierRouter.route('/')
              .get(
                idQuery,
                nameQuery,
                methodQuery,
                async (req, res) => {
                  const response = await SupplierController.getByQuery({
                    id: req.id,
                    name: req.name,
                    method: req.method
                  });
                  res.set('X-Total-Amount', (await SupplierController.getTotalCount()).body.total_count);
                  res.set('X-Current-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

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