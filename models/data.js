var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
item:{type: String, required: true},
dueDate:{type: Date, required: true},
done:{type: String, default: "false"},
delete:{type: String, default: "false"},
goal:{type: String, required: true},
userId:{type: String},
doneTime:{type: Date},
});

var Todo = mongoose.model('Todo',dataSchema);
module.exports = Todo
