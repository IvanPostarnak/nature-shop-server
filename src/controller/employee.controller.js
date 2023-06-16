const Postgresql = require('../modules/Postgresql');
const Controller = require('./../entity/Controller');

class EmployeeController extends Controller {
  constructor (database) {
    super(database);
  }

  async getAll(infoMod) {
    let response = {code: 200, body: '', count: 0}
    try {
      response.body = await this.database.getAll('employees', infoMod);
      response.count = response.body.length;
      if (response.count === 0) {
        response.code = 404;
        response.body = 'There are not any employees';
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
      response.body = await this.database.getTotalCount('employees');
    } catch (err) {
      response.code = 500;
      response.body = err.message;
    }
    return response;
  }
}

module.exports = new EmployeeController(Postgresql);
