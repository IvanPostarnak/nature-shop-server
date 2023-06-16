const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class PurchaseController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll(infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('purchases', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = 'There are not any purchases';
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
      response.body = await this.database.getTotalCount('purchases');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getOneById(id, infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getOneById(id, 'purchases', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There is not a purchase with id '${id}' and query '${infoMod}'`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new PurchaseController(Postgresql);
