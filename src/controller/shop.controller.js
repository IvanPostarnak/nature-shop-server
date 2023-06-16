const filterObjectByValue = require('../helpers/filterObjectByValue');
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ShopController extends Controller {
  constructor (database) {
    super(database);
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('shops');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getSupport(queryObj, param) {
    let response = {code: 200, body: '', count: 0};
    const filteredQuery = filterObjectByValue(queryObj);
    try {
      response.body = await this.database.getByQuery(filteredQuery, 'shops', param);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There are not any support relations matching: '${param}' by query '${JSON.stringify(filteredQuery)}'`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new ShopController(Postgresql);
