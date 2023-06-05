const pgClient = require("../config/postgresql");
const Database = require('../entity/Database');

class Postgresql extends Database {
  constructor (client) {
    super(client);
  }
};

module.exports = new Postgresql(pgClient);