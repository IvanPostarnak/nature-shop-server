const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ProductController extends Controller {
  constructor (database) {
    super(database);
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('products');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getBasic() {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('products_basic');
      response.count = response.body.length;
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    if (response.count === 0) {
      response.code = 404;
      response.body = 'There are no any products';
    }
    return response;
  }

  async getSupport(param) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll(`products_${param}`);
      response.count = response.body.length;
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    if (response.count === 0) {
      response.code = 404;
      response.body = `There are no any products' ${param}`;
    }
    return response;
  }
}

module.exports = new ProductController(Postgresql);
