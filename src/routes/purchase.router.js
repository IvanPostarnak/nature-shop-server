const PurchaseController = require('../controller/purchase.controller');
const PurchaseRouter = require('express').Router();

PurchaseRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await PurchaseController.getTotalCount();
                res.status(response.code).json(response.body);
              });

module.exports = PurchaseRouter;