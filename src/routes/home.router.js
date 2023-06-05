const HomeRouter = require('express').Router();
const HomeController = require('./../controller/home.controller');

HomeRouter.route('/')
.get((req, res) => {
  console.log('It is working');
  res.status(200).send(HomeController.getHome());
})

module.exports = HomeRouter;
