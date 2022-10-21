require("dotenv").config();

const SDB = {
  database: process.env.SDB_DATABASE,
  username: process.env.SDB_USERNAME,
  password: process.env.SDB_PASSWORD,
  host: process.env.SDB_HOST,
  dialect: process.env.SDB_DIALECT,
};

module.exports = SDB