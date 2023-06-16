const PurchaseController = require('../controller/purchase.controller');
const infoQuery = require('../middleware/infoQuery');
const PurchaseRouter = require('express').Router();

PurchaseRouter.route('/all')
              .get(
                infoQuery,
                async (req, res) => {
                  const response = await PurchaseController.getAll(req.info_mod);
                  res.set('X-Total-Amount', response.count);
                  res.status(response.code).json(response.body);
                }
              );

PurchaseRouter.route('/total_count')
              .get(async (req, res) => {
                const response = await PurchaseController.getTotalCount();
                res.status(response.code).json(response.body);
              });

module.exports = PurchaseRouter;