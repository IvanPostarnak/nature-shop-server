const ShipperRouter = require('express').Router();
const ShipperController = require('../controller/shipper.controller');
const idQuery = require('../middleware/idQuery');
const nameQuery = require('../middleware/nameQuery');
const methodQuery = require('../middleware/methodQuery');

ShipperRouter.route('/')
             .get(
               nameQuery,
               idQuery,
               methodQuery,
               async (req, res) => {
                 const response = await ShipperController.getByQuery({
                  id: req.id,
                  name: req.name,
                  method: req.method
                 });
                 res.set('X-Total-Amount', (await ShipperController.getTotalCount()).body.total_count);
                 res.set('X-Current-Amount', response.count);
                 res.status(response.code).json(response.body);
               }
             );

ShipperRouter.route('/all')
             .get(async (req, res) => {
               const response = await ShipperController.getAll();
               res.set('X-Total-Amount', response.count);
               res.status(response.code).json(response.body);
             });

ShipperRouter.route('/total_count')
             .get(async (req, res) => {
               const response = await ShipperController.getTotalCount();
               res.status(response.code).json(response.body);
             });

ShipperRouter.route('/:id')
             .get(async (req, res) => {
               const response = await ShipperController.getOneById(req.params.id);
               res.status(response.code).json(response.body);
             });

module.exports = ShipperRouter;