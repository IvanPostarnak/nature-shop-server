const filterObjectByValue = require('../helpers/filterObjectByValue');
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class ShopController extends Controller {
  constructor (database) {
    super(database);
  }

  async getByQuery(queryObj, infoMod) {
    let response = {code: 200, body: '', count: 0};
    const filteredQuery = filterObjectByValue(queryObj);
    try {
      response.body = await this.database.getByQuery(filteredQuery, 'shops', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `Shops by queries : '${JSON.stringify(filteredQuery)}' were not found`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getAll(infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('shops', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There are not any shops (info_mod = '${infoMod}')`;
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

  async getOneById(id, infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getOneById(id, 'shops', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `There is not a shop with id '${id}' and query '${infoMod}'`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new ShopController(Postgresql);
