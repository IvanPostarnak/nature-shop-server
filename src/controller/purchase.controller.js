const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class PurchaseController extends Controller {
  constructor (database) {
    super(database);
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('purchases');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new PurchaseController(Postgresql);
