const filterObjectByValue = require('../helpers/filterObjectByValue');
const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class PostController extends Controller {
  constructor (database) {
    super(database);
  }

  async getByQuery(queryObj) {
    let response = {code: 200, body: [], count: 0};
    console.log(queryObj)
    const filteredQuery = filterObjectByValue(queryObj)
    try {
      response.body = await this.database.getByQuery('posts', filteredQuery)
      response.count = response.body.length;
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    if (response.body.length === 0) {
      response.code = 404;
      response.body = `Posts by queries : '${JSON.stringify(queryObj)}' were not found`;
    }
    return response;
  }

  async getAll() {
    let response = {code: 200, body: [], count: 0};
    try {
      response.body = await this.database.getAll('posts')
      response.count = response.body.length;
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getTotalCount() {
    let response = {code: 200, body: ''}
    try {
      response.body = await this.database.getTotalCount('posts')
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }

  async getOneById(id) {
    let response = {code: 200, body: []};
    try {
      response.body = await this.database.getOneById('posts', id)
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    if (response.body === undefined) {
      response.code = 404;
      response.body = `Post with id '${id}' was not found`;
    }
    return response;
  }
}

module.exports = new PostController(Postgresql);
