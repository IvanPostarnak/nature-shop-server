const pgEngine = require("../config/postgresql");
const Database = require('../entity/Database');
const configureQuery = require("../helpers/configureQuery");

class Postgresql extends Database {
  constructor (engine) {
    super(engine);
    this.engine = engine;
  }

  defineTableByKeyword (arg) {
    let tableName;
    switch (arg) {
      case 'posts':
        tableName = 'post';
    }
    return tableName;
  }

  async getByQuery(keyword, queryObj) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      const queryString = configureQuery(queryObj, table);
      console.log(queryString);
      try {
        const result = await this.engine.query(queryString);
        return result.rows;
      } catch (error) {
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  } 

  async getAll(keyword) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${table}`);
        return result.rows;
      } catch (error) {
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
        const result = await this.engine.query(`SELECT COUNT(*) as total_count FROM ${table}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }

  async getOneById(keyword, id) {
    const table = this.defineTableByKeyword(keyword);
    if (table) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${table} WHERE post_id = ${id}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }

  connect() {
    return this.engine.connect();
  }

  end() {
    return this.engine.end();
  }
};

module.exports = new Postgresql(pgEngine);