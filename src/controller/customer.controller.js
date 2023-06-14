const filterObjectByValue = require('../helpers/filterObjectByValue');
const Controller = require('../entity/Controller');
const Postgresql = require('../modules/Postgresql');

class CustomerController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll(infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('customers', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There are not any customers (info_mod = '${infoMod}')`;
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
      response.body = await this.database.getTotalCount('customers')
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getOneById(id, infoMod) {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getOneById(id, 'customers', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There is not any customer with id='${id}'(info_mod = '${infoMod}')`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new CustomerController(Postgresql);