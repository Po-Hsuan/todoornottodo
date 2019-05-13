const express = require('express')
const app = express()
const path = require('path')
const port = 3000

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webapp');
var userID = require('./models/user.js');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const saltRounds = 10
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session")
//using controllers
var routeController = require('./controllers/routeController.js')
var UserController = require('./controllers/UserController.js')
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//passport
app.use(session({ secret: "cats", cookie:{ maxAge: 60000000 }, saveUnitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
//set up pug
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname + '/public')))
//routes
passport.use(new LocalStrategy(
 function(username, password, done) {
   console.log('LocalStrategy')
   userID.findOne({"username" : username},function (err, user) {
     if (err){
       console.log(err);
       return done(err);
     }
     if (user === null){
       console.log("docs undefine");
       return done(null, false);
     }
     bcrypt.compare(password, user.password, function(err, val) {
       console.log(val)
       if(val===false) {
         console.log("login failure");
         return done(null, false);
       } else {
         console.log("login sucess");
         return done(null, user);
       }
     })
   })
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  userID.findById(id, function(err, user) {
    done(err, user);
  });
});
function LoginYet(req, res, next){
  console.log("Unauthorized User detected!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Self destruct system activated. 10 9 8 7 6 5 4 3 2 1 ............💥💥💥BOOOOOMMMM💥💥💥🤯🤯!!!!")
  console.log(req.user)
  if(req.user === undefined){
    res.redirect('/')
    return
  }
  next()
}
app.get('/', UserController.login)
app.post('/logining',
  passport.authenticate('local', { successRedirect: '/goals',
                                    failureRedirect: '/',
                                    failureFlash: false}));
app.get('/Signup', UserController.signup)
app.post('/signingUp', UserController.signingUp)
//new goals
app.get('/newgoals',routeController.newgoals)
//goals display
app.get('/goals',routeController.showGoals)
app.post('/goalForm',routeController.goalForm)
app.listen(port, () => console.log("online"))
