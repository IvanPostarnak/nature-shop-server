const pgClient = require("../config/postgresql");
const Database = require('../entity/Database');

class Postgresql extends Database {
  constructor (client) {
    super(client);
  }

  defineTableByKeyword (arg) {
    let tableName;
    switch (arg) {
      case 'posts':
        tableName = 'post';
    }
    return tableName;
  }

  async getTotalCount(keyword) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      try {
        await this.client.connect();
        const result = await this.client.query(`SELECT COUNT(*) as total_count FROM ${table}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      } finally {
        this.client.end();
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }
};

module.exports = new Postgresql(pgClient);