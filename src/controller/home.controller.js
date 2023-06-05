const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class HomeController extends Controller {
  constructor (database) {
    super(database);
  }

  getHome() {
    return('Some text data')
  }
}

module.exports = new HomeController(Postgresql);
