const pgEngine = require("../config/postgresql");
const Database = require('../entity/Database');
const configureTableQuery = require("../helpers/configureTableQuery");

class Postgresql extends Database {
  constructor (engine) {
    super(engine);
    this.engine = engine;
  }

  defineTable (keyword, infoMod) {
    let table = null;
    switch (keyword) {
      case 'posts':
        table = {name: 'post', column: 'post_id', type: 'table'};
        break;
      case 'products':
        switch (infoMod) {
          case 'full':
            table = {name: 'product_everything', column: 'product_id', type: 'json'};
            break;
          case 'categories':
            table = {name: 'product_category', column: 'product_category_id', type: 'table'};
            break;
          case 'forms':
            table = {name: 'product_form', column: 'product_form_id', type: 'table'};
            break;
          case 'types':
            table = {name: 'product_type', column: 'product_type_id', type: 'table'};
            break;
          default:
            table = {name: 'product_basic', column: 'product_id', type: 'json'};
            break;
        };
        break;
      case 'universal':
        switch (infoMod) {
          case 'genders':
            table = {name: 'gender', column: 'gender_id', type: 'table'};
            break;
          case 'brands':
            table = {name: 'brand', column: 'brand_id', type: 'table'};
            break;
          case 'cities':
            table = {name: 'city', column: 'city_id', type: 'table'};
            break;
          case 'color_schemas':
            table = {name: 'color_schema', column: 'color_schema_id', type: 'table'};
            break;
          case 'companies':
            table = {name: 'company', column: 'company_id', type: 'table'};
            break;
          case 'countries':
            table = {name: 'country', column: 'country_id', type: 'table'};
            break;
          case 'currency':
            table = {name: 'currency', column: 'currency_id', type: 'table'};
            break;
          case 'exchange_rates':
            table = {name: 'exchange_rate', column: 'exchange_rate_id', type: 'table'};
            break;
          case 'family_statuses':
            table = {name: 'family_status', column: 'family_status_id', type: 'table'};
            break;
          case 'languages':
            table = {name: 'language', column: 'language_id', type: 'table'};
            break;
          case 'measure_units':
            table = {name: 'measure_unit', column: 'measure_unit_id', type: 'table'};
            break;
          case 'packing_materials':
            table = {name: 'packing_material', column: 'packing_material_id', type: 'table'};
            break;
          case 'payment_types':
            table = {name: 'payment_type', column: 'payment_type_id', type: 'table'};
            break;
        }
        break;
    }
    return table;
  }

  async getByQuery(queryObj, keyword, infoMod) {
    const table = this.defineTable(keyword, infoMod);
    if (table) {
      const queryString = configureTableQuery(queryObj, table);
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
    console.log(table)
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