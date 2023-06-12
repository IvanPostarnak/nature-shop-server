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
        case 'products_basic':
          tableName = 'product_basic';
          break;
        case 'products_categories':
          tableName = 'product_category';
          break;
        case 'products_forms':
          tableName = 'product_form';
          break;
        case 'products_types':
          tableName = 'product_type';
          break;
        case 'products_all':
          tableName = 'product_everything';
          break;
      }
      tableName && tables.push(tableName)
    }
    return tables;
  }

  async getByQuery(queryObj, ...keywords) {
    const tables = this.defineTableByKeyword(keywords);
    if (tables[0]) {
      const queryString = configureQuery(queryObj, tables[0]);
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
    console.log(tables);
    if (tables[0]) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${tables[0]}`);
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
    if (tables[0]) {
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
    if (tables[0]) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${tables[0]} WHERE post_id = ${id}`);
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