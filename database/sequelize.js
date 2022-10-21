const { Sequelize } = require("sequelize");
const SDB = require("../configuration/SDB");

const sequelize = new Sequelize(SDB.database, SDB.username, SDB.password, {
  host: SDB.host,
  dialect: SDB.dialect,
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully connected to mySQL");
  })
  .catch((err) => {
    console.log(err);
  });
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables synced successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
