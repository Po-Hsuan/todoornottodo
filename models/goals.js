var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var goalSchema = new Schema({
  goal:{type: String, required: true},
  done:{type: String, default: "false"},
  delete:{type: String, default: "false"},
  userId:{type: String},
});

var Goal = mongoose.model('Goal',goalSchema);
module.exports = Goal
