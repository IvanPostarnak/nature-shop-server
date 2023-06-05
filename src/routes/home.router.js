const homeRouter = require('express').Router();
const HomeController = require('./../controller/home.controller');

homeRouter.route('/')
.get((req, res) => {
  console.log('It is working');
  res.status(200).send(HomeController.getHome());
})

module.exports = homeRouter;