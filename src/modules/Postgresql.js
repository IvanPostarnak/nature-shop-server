const pgEngine = require("../config/postgresql");
const Database = require('../entity/Database');

class Postgresql extends Database {
  constructor (engine) {
    super(engine);
  }

  defineTableByKeyword (arg) {
    let tableName;
    switch (arg) {
      case 'posts':
        tableName = 'post';
    }
    return tableName;
  }

  async getAll(keyword, isFull) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      const query = isFull ? '*' : 'post_id, title, content, author_id, language_id';
      try {
        await this.engine.connect();
        const result = await this.engine.query(
          `SELECT ${query} FROM ${table}`
        );
        this.engine.end();
        return result.rows;
      } catch (error) {
        this.engine.end();
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }

  async getTotalCount(keyword) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      try {
        await this.engine.connect();
        const result = await this.engine.query(`SELECT * FROM ${table}`);
        this.engine.end();
        return result.rows[0];
      } catch (error) {
        this.engine.end();
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }
};

module.exports = new Postgresql(pgEngine);