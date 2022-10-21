const mongoose = require("mongoose");
const { Schema } = mongoose;

const shoeSchema = new Schema({
  shoe_name: String,
  designer_name: String,
  price: Number,
});

const Shoes = mongoose.model("Shoes", shoeSchema);
module.exports = Shoes