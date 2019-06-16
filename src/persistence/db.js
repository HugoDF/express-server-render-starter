const {Pool} = require('pg');
const {DATABASE_URL} = require('../../config');

module.exports = new Pool({
  max: 10,
  connectionString: DATABASE_URL
});
