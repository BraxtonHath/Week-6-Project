//terminal
npm init;
npm install express-session --save;
npm install express --save;
npm install mustache-express --save;
npm install parseurl --save;
npm install body-parser --save;




//code
const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const parseurl = require('parseurl');
//missing express validator

const app = express();

//to auto use views
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

//app USES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

//for passwords sessions
app.use(session({
  secret:'keyboard car',
  resave: false,
  saveUninitialized: true
}));

//linking to routes folder
app.use('/users', require('./routes/users'));
app.use('/signup')





//routes guide BELONGS IN ROUTES FOLDERS
//NEED TO REQUIRE IN EXPRESS.USERS and all other requires

//pulling from main app.js connecting them
 router.get('/signup', function(req, res) {
   res.render('users/sign up');
 });
//this is how we capture the info to the session to pull info to the model
router.post('signup', function(req, res) {
//checking bodys to see results
  req.checkBody('username', 'username must not be empty').notEmpty();
  req.checkBody('password', 'password must not be empty');
  req.checkBody('username', 'username must not be empty');
  req.getValidationResults().then(function(results) {
    //if the feild is empty seneding them back
    if (result.isEmpty()){
      models.user.create({
        username: req.body.username,
        usernam: req.body.usernam
      }) .then(function (newUSER){
        req.session.userID = newUser.id;
        console.log('newuser.id,newUSERID');
        res.redirect('/');

        //catching errprs
      }).catch(squelize.UniqueConstrainError, function (error){
        res.render('users/signup', {uniqueError: true, username: req.body.username})
      });
    }else {
      var context ={ //stores values
      errors: result.mapped()
      , username: req.body.username
    }
      res.render('user/signup', context);
    }
  })
})




//notes

make sure routes and stuff are set up

sign up html form needs to have action of '/users/signup' and method of post for line
50-77

inputs need ID/CLASS i can pull from aalso i need to connect a SUBMIT button to the form
