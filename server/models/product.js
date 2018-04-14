var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  title: String,
  type:String,
  Cost:Number,
  Distcount:Number,
  Size:String,
  amount:Number,
  description: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
