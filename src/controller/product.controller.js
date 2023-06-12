const filterObjectByValue = require('../helpers/filterObjectByValue');
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ProductController extends Controller {
  constructor (database) {
    super(database);
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('products')
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new ProductController(Postgresql);
