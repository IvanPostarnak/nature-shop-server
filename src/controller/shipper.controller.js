
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ShipperController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll() {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('shippers');
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = 'There are not any shippers';
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('shippers');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new ShipperController(Postgresql);
