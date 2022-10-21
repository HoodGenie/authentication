const mongoose = require("mongoose");
require("dotenv").config();

const mongodbURI = process.env.MONGODB_URI;

function mongodbConnection(params) {
  mongoose.connect(mongodbURI);
  mongoose.connection.on("connected", () => {
    console.log("Successfully connected to mongodb");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to mongodb");
    console.log(err);
  });
}

module.exports = {
  mongodbConnection,
};
