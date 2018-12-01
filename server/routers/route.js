var expres = require('express');
// setup the Router
var router = expres.Router();
// NOTE: declare varible , this varible is Object inside express help me to get the route method

// NOTE: when user login
router.route('/login')
  .post(function (req, res) {
    console.log('ya i get message from /login');
    res.send('hello world from server /login');
  })
// NOTE: when user get somthing from the login
router.route('/login')
  // NOTE: when user login
  .get(function (req, res) {
    console.log('ya i get message from /login');
    res.send('hello world from server /login');
  });


// NOTE: when user signup
router.route('/signup')
  .post(function (req, res) {
    console.log("ya iam post message from /signup");
    res.send('hello world from server /signup');
  });

router.route('/signup')
  // NOTE: when user get somthing from the signup
  .get(function (req, res) {
    console.log("ya iam get message from /signup");
    res.send('hello world from server /signup');
  });

// NOTE: when user addPost
router.route('/addPost')
  .post(function (req, res) {
    console.log("ya iam post message from /addPost");
    res.send('hello world from server /addPost');
  });
// NOTE: when user get somthing from the addPost
router.route('/addPost')
  .get(function (req, res) {
    res.send('hello world from server /addPost/:id');
    console.log("ya iam get message from /addPost/:id")
  });

module.exports = router;