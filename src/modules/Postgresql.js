const pgEngine = require("../config/postgresql");
const Database = require('../entity/Database');
const configureQuery = require("../helpers/configureQuery");

class Postgresql extends Database {
  constructor (engine) {
    super(engine);
    this.engine = engine;
  }

  defineTable (keyword, infoMod) {
    let table = {};
    switch (keyword) {
      case 'posts':
        table = {name: 'post', column: 'post_id'};
        break;
      case 'products':
        switch (infoMod) {
          case 'full':
            table = {name: 'product_everything', column: 'product_id'};
            break;
          case 'categories':
            table = {name: 'product_category', column: 'product_category_id'};
            break;
          case 'forms':
            table = {name: 'product_form', column: 'product_form_id'};
            break;
          case 'types':
            table = {name: 'product_type', column: 'product_type_id'};
            break;
          default:
            table = {name: 'product_basic', column: 'product_id'};
            break;
        }
      }
    return table;
  }

  async getByQuery(queryObj, keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      const queryString = configureQuery(queryObj, table.name);
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

  async getAll(keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${table.name}`);
        return result.rows;
      } catch (error) {
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }

  async getTotalCount(keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      try {
        const result = await this.engine.query(`SELECT COUNT(*) as total_count FROM ${table.name}`);
        return result.rows[0];
      } catch (error) {
        throw new Error('Error querying the database: Server Error');
      }
    } else {
      throw new Error('Unmatching keyword parameter at getTotalCount method: ' + keyword);
    }
  }

  async getOneById(id, keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      try {
        const result = await this.engine.query(`SELECT * FROM ${table.name} WHERE ${table.column} = ${id}`);
        return result.rows;
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