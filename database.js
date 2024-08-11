// dbConfig.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'zenhub_db',
  password: 'Doujifat950', 
  port: 5432,
});

module.exports = pool;
