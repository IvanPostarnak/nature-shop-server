const ShipperRouter = require('express').Router();
const ShipperController = require('../controller/shipper.controller');

ShipperRouter.route('/total_count')
             .get(async (req, res) => {
               const response = await ShipperController.getTotalCount();
               res.status(response.code).json(response.body);
             });

module.exports = ShipperRouter;