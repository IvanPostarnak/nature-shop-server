const filterObjectByValue = require('../helpers/filterObjectByValue');
const Controller = require('../entity/Controller');
const Postgresql = require('../modules/Postgresql');

class UniversalController extends Controller {
  constructor (database) {
    super(database);
  }

  async getRelation(queryObj, relation) {
    let response = {code: 200, body: '', count: 0}
    const filteredQuery = filterObjectByValue(queryObj);
    try {
      response.body = await this.database.getByQuery(filteredQuery, 'universal', relation);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = `Universal relation '${relation}' were not found by queries : '${JSON.stringify(queryObj)}'`;
      }
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new UniversalController(Postgresql);