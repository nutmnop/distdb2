var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  title: String,
  type:String,
  Cost:Number,
  Distcount:Number,
  Size:String,
  amount:Number,
  description: String
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
