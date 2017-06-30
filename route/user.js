const express = require('express');
const router = express.Router(); // needed to use router

// router.use(function(req, res, next) {
//   console.log('hit middleware');
//   next();
// });

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup', function(req, res) {
  req.checkBody('username', 'username must not be empty').notEmpty();
  req.checkBody('password', 'password must not be empty').notEmpy();
  // req.checkBody('username', 'username must not be empty');
  req.getValidationResults().then(function(results) {

    if (result.isEmpty()){
      models.User.create({
        username: req.body.username,
        password: req.body.password
      }) .then(function (newUser){
        req.session.userId = newUser.id;
         console.log('newUser.id', newUser.Id);
        res.redirect('/');


      }).catch(squelize.UniqueConstrainError, function (error){
        res.render('/signup', {uniqueError: true, username: req.body.username});
      });
    }else {
      var context ={ //stores values
        errors: result.mapped(),
        username: req.body.username
      };
      res.render('/signup', context);
    }
  });
});


module.exports = router;
