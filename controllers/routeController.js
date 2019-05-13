var Goal = require('../models/goals.js');
var Todo = require('../models/data.js')
exports.newgoals = function (req, res){
  res.render('Goal')
}
exports.showGoals = function (req, res) {
  Goal.find({},function (err, docs) {
      res.render('savedGoals', {Datas:docs})
  })
}
exports.goalForm = function (req, res) {
  console.log(req.body)
  var formd = new Goal(req.body)
  formd.save(function (err) {
    if (err){
      console.log(err)
      res.render('IncompleteInput')
      return
    }else{
      res.render('ThankyouPage')
  }})
}
exports.showSteps = function (req, res) {
  Todo.find({},function (err, docs) {
      res.render('savedSteps', {Datas:docs})
  })
}
