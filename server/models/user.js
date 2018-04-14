var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{type:String,unique:true},
  type:{default:'customer',type:String},
  password:{type:String}
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
