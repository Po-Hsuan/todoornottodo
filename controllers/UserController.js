var userID = require('../models/user.js');
const saltRounds = 10
const bcrypt = require('bcrypt')

exports.signup = function (req, res) {
  res.render('Signup')
}

exports.signingUp = function (req, res) {
  const Email = req.body.Email
  const username = req.body.username
  const password = req.body.password
  const password2 = req.body.password2

  if (username === '' || password === '' || password2 === '' || Email === ''){
    res.render('IncompleteInput')
    return
  }
  if (password !== password2){
    res.render('differentPassword')
    return
  }
  bcrypt.hash(password, saltRounds,function(err, hash){
    var user = new userID({Email:Email, username:username, password:hash})
    user.save(function (err, savedUser) {
      if (err){
        console.log(err)
        res.send('<h1> sorry, some error have accured in the process of creating the acount please try again or contact nobody at nobody@nobody.nb.com.</h1>')
        return
      }
      console.log("user sucessfully created.")
      console.log(savedUser)
      res.render('ThankyouPage')
    })
  })
}
exports.login = function (req, res) {
  res.render('login')
}
