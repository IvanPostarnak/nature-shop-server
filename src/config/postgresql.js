const { Client } = require('pg');

const pgClient = new Client({
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
  database: process.env.POSTGRE_DB
});

module.exports = pgClient;