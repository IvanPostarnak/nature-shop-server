const pgEngine = require("../config/postgresql");
const Database = require('../entity/Database');
const configureQuery = require("../helpers/configureQuery");

class Postgresql extends Database {
  constructor (engine) {
    super(engine);
    this.engine = engine;
  }

  defineTableByKeyword (keywords) {
    let tables = [];
    for (let i in keywords) {
      let tableName;
      switch (keywords[i]) {
        case 'posts':
          tableName = 'post';
          break;
        case 'products':
          tableName = 'product';
          break;
      }
      tableName && tables.push(tableName)
    }
    return tables;
  }

  async getByQuery(queryObj, ...keywords) {
    const tables = this.defineTableByKeyword(keywords);
    if (tables) {
      console.log(queryObj)
      const queryString = configureQuery(queryObj, tables);
      console.log(queryString);
      try {
        const result = await this.engine.query(queryString);
        return result.rows;
      } catch (error) {
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keywords);
    }
  } 

  async getAll(...keywords) {
    const tables = this.defineTableByKeyword(keywords);
    if (tables) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${tables}`);
        return result.rows;
      } catch (error) {
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keywords);
    }
  }

  async getTotalCount(...keywords) {
    const tables = this.defineTableByKeyword(keywords);
    if (tables) {
      try {
        const result = await this.engine.query(`SELECT COUNT(*) as total_count FROM ${tables}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keywords);
    }
  }

  async getOneById(id, ...keywords) {
    const tables = this.defineTableByKeyword(keywords);
    if (tables) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${tables} WHERE post_id = ${id}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keywords);
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