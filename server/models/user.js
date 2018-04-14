var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: String,
  description: String
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
