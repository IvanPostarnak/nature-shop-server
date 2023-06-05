const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class PostController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll() {
    
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
}

module.exports = new PostController(Postgresql);
