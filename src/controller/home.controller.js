const database = require('./../modules/database');

class HomeController {
  constructor (database) {
    this.database = database;
  }

  getHome() {
    return('Some text data')
  }
}

module.exports = new HomeController(database);