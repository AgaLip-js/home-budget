const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "GuniGuni25",
  host: "localhost",
  port: "5432",
  database: "homeBudget",
});

module.exports = pool;
