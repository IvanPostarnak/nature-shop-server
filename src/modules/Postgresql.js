const pgEngine = require("../config/postgresql.config");
const Database = require('../entity/Database');
const configureTableQuery = require("../helpers/configureTableQuery");
const Dictionary = require("./Dictionary");

class Postgresql extends Database {
  constructor (engine, dictionary) {
    super(engine);
    this.engine = engine;
    this.dictionary = dictionary;
  }

  defineTable (keyword, infoMod) {
    return this.dictionary.get(keyword, infoMod);
  }

  async getByQuery(queryObj, keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      const queryString = configureTableQuery(queryObj, table);
      console.log('query string: \n' + queryString);
      try {
        const result = await this.engine.query(queryString);
        return result.rows;
      } catch (error) {
        throw new Error('Error querying the database: ' + error.message);
      }
    } else {
      throw new Error(`Unable to define table by params : ${[keyword, infoMod]}]'${table}' at \'getByQuery()\' method`);
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
      throw new Error(`Unable to define table by params : ${[keyword, infoMod]}]'${table}' at \'getAll()\' method`);
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
      throw new Error(`Unable to define table by params : ${[keyword, infoMod]}]'${table}' at \'getTotalCount()\' method`);
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
      throw new Error(`Unable to define table by params : ${[keyword, infoMod]}]'${table}' at \'getOneById()\' method`);
    }
  }
};

module.exports = new Postgresql(pgEngine, Dictionary);