var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  Email:{type:String, required: true },
  username:{type:String,required: true },
  password:{type:String,required: true },
});

var userID = mongoose.model('userID', userSchema)
module.exports = userID
