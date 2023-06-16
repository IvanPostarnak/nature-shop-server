const ShopController = require('../controller/shop.controller');
const ShopRouter = require('express').Router();

ShopRouter.route('/total_count')
          .get(async (req, res) => {
            const response = await ShopController.getTotalCount();
            res.status(response.code).json(response.body);
          });

module.exports = ShopRouter;