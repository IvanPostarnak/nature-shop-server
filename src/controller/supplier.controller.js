const filterObjectByValue = require('../helpers/filterObjectByValue');
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class SupplierController extends Controller {
  constructor (database) {
    super(database);
  }

  async getByQuery(queryObj) {
    let response = {code: 200, body: '', count: 0};
    const filteredQuery = filterObjectByValue(queryObj);
    try {
      response.body = await this.database.getByQuery(filteredQuery, 'suppliers');
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `Suppliers by queries : '${JSON.stringify(filteredQuery)}' were not found`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getAll() {
    let response = {code: 200, body: '', count: 0};
    try {
      response.body = await this.database.getAll('suppliers');
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = 'There are not any suppliers';
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
      response.body = await this.database.getTotalCount('suppliers');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getOneById(id) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getOneById(id, 'suppliers');
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There is not a supplier with id '${id}'`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new SupplierController(Postgresql);
