const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");

const bags = sequelize.define(
  "bags",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Brand_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Designer_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Year_Created: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Bags",
  }
);

module.exports = bags