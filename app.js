const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const parseurl = require('parseurl');
const expressValidator = require('express-validator');
const routes = require('./route/user'); //everything required everywhere else needs to be in app.js
const models = require('./models');

const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


app.use(session({
  secret:'keyboard car',
  resave: false,
  saveUninitialized: true
}));

app.use('/users', require('./route/user')); //requires the var to pass the destination
// app.use('/signup', routes);





const Userinfo = models.user.build({
    Username: req.body.username,
    Password: req.body.password

  });
  Userinfo.save().then //I AM HERE COME BACK HERE
  //NDSKFNKSDANFKANSDKFNDSKAFNKSADNFKSADNKGNDSK
  //skdnflsndlgdlskfnlknsdgklndkslnfklnsgkldnsfn
  //dklsnklnsgklndsklfnklnsdklganksldgndsk;ng;
  //pls come back






app.listen(3000, function() {
  console.log('working');
});
