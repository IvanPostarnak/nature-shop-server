const HomeRouter = require('express').Router();
const HomeController = require('./../controller/home.controller');

HomeRouter.route('/')
          .get((req, res) => {
              res.status(200).send(HomeController.getHome());
          });

HomeRouter.route('/pages/privacy_policy')
          .get(async (req, res) => {
            const response = await HomeController.getPrivacyPolicy();
            res.status(response.code).json(response.body);
          });

HomeRouter.route('/pages/:page')
          .get(async (req, res) => {
            const response = await HomeController.getPage(req.params.page);
            res.status(response.code).json(response.body);
          });

module.exports = HomeRouter;
