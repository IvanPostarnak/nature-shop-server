const ShipperRouter = require('express').Router();
const ShipperController = require('../controller/shipper.controller');

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