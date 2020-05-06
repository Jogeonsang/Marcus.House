const { Pool } = require('pg');

const client = new Pool({
  user : 'postgres',
  host : 'localhost',
  database : 'marcus_house',
  password : 'jung781',
  port : 5432,
});

module.exports = client
