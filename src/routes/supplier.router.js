const SupplierRouter = require('express').Router();
const SupplierController = require('../controller/supplier.controller');
const idQuery = require('../middleware/query/id.query');
const nameQuery = require('../middleware/query/name.query');
const methodQuery = require('../middleware/query/method.query');

SupplierRouter.route('/')
              .get(
                idQuery,
                nameQuery,
                methodQuery,
                async (req, res) => {
                  const response = await SupplierController.getByQuery({...req.custom.query});
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