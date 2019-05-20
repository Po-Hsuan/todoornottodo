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
  Todo.find({"goal":req.params.goalname},function (err, docs) {
      res.render('savedSteps', {Datas:docs})
  })
}
exports.newSteps = function (req, res){
  res.render('Step')
}
exports.stepForm = function (req, res) {
  console.log(req.body)
  var forms = new Todo(req.body)
  forms.save(function (err) {
    if (err){
      console.log(err)
      res.render('IncompleteInput')
      return
    }else{
      res.render('ThankyouPage')
  }})
}
exports.done = function (req, res){
  console.log("done with goal")
  Todo.findById(req.params.itemId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("step not found.")
      return
    }
    item.done="true"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"you had one job, and you didn't do it!!!"})
        return
      }
        res.json({sucess:"done"})
    })
  })
}
exports.undone = function (req, res){
  console.log("undone with goal")
  Todo.findById(req.params.itemId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("step not found.")
      return
    }
    item.done="false"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"you had one job and you nailed it"})
        return
      }
        res.json({sucess:"undone"})
    })
  })
}
exports.donegoal = function (req, res){
  console.log("done with goal")
  Goal.findById(req.params.goalId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("goal not found.")
      return
    }
    item.done="true"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"you had one job, and you didn't do it!!!"})
        return
      }
        res.json({sucess:"done"})
    })
  })
}
exports.undonegoal = function (req, res){
  console.log("undone with goal")
  Goal.findById(req.params.goalId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("goal not found.")
      return
    }
    item.done="false"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"you had one job and you nailed it"})
        return
      }
        res.json({sucess:"undone"})
    })
  })
}
exports.delete = function (req, res){
  console.log("delete")
  Todo.findById(req.params.itemId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("step not found.")
      return
    }
    item.delete="true"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"system error"})
        return
      }
        res.json({sucess:"undone"})
    })
  })
}
exports.deletegoal = function (req, res){
  console.log("delete goal")
  Goal.findById(req.params.goalId, function(err, item){
    if (err){
      console.log(err)
      return
    }
    if (item === null){
      console.log("goal not found.")
      return
    }
    item.delete="true"
    item.save(function(error, itemAfterSave){
      if (error){
        console.log(error)
        res.json({error:"system error"})
        return
      }
        res.json({sucess:"undone"})
    })
  })
}
