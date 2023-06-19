const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class HomeController extends Controller {
  constructor (database) {
    super(database);
  }

  getHome() {
    return('Some text data')
  }

  async getPage(page) {
    let response = {code: 200, body: '', count: 0};
    try {
      response.body = await this.database.getByQuery({limit: 1}, 'home', page);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `Page '${page}' was not found in the database`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
    }

 async getPrivacyPolicy() {
  let response = {code: 200, body: '', count: 0};
  try {
    response.body = await this.database.getByQuery({limit: 1}, 'home', 'privacy_policy');
    response.count = response.body.length;
    if (response.count === 0) {
      response.code = 404;
      response.body = `Page 'Privacy policy' was not found in the database`;
    }
  } catch (err) {
    response.code = 500;
    response.body = err.message;
  }
  return response;
  }
}

module.exports = new HomeController(Postgresql);
