const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ProductController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll(infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('products', infoMod);
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

  async getOneById(id, infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getOneById(id, 'products', infoMod);
      response.count = response.body.length;
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    if (response.count === 0) {
      response.code = 404;
      response.body = `There is no a product with id '${id}' and query '${infoMod}'`;
    }
    return response;
  }

  async getSupport(param) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('products', param);
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
