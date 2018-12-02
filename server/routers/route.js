var expres = require('express');
var dbConnection = require('../../db/db.js')
// setup the Router
var router = expres.Router();
// NOTE: declare varible , this varible is Object inside express help me to get the route method

// NOTE: when user login
router.route('/login')
  .post(function(req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    var query = `select * from credential where username=\"${username}\"`
    //NOTE: 0-->(No username) 1-->(password corect) 2-->(wrong password) 3-->(ERROR)
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        if (result.length === 0) {
          res.send('0');
        } else if (result[0].password == password) {
          console.log(1);
          res.send('1');

        } else {
          res.send('2');
        }

      } else {
        res.send('3');
      }
    })

  })
// NOTE: when user get somthing from the login
router.route('/login')
  // NOTE: when user login
  .get(function(req, res) {
    console.log('ya i get message from /login');
    res.send('hello world from server /login');
  });


// NOTE: when user signup
router.route('/signup')
  .post(function(req, res) {
    console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var query = `insert into credential values(null,\"${firstName}\",\"${lastName}\",\"${email}\",\"${phoneNumber}\",\"${username}\",\"${password}\")`
    //NOTE: 0-->(Not save) 1-->(save correctly)
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        res.send("1")
      } else {
        res.send("0")
      }
    })

  });

router.route('/signup')
  // NOTE: when user get somthing from the signup
  .get(function(req, res) {
    console.log("ya iam get message from /signup");
    res.send('hello world from server /signup');
  });

// NOTE: when user addPost
router.route('/addPost')
  .post(function(req, res) {
    console.log("ya iam post message from /addPost");
    res.send('hello world from server /addPost');
  });
// NOTE: when user get somthing from the addPost
router.route('/addPost')
  .get(function(req, res) {
    res.send('hello world from server /addPost/:id');
    console.log("ya iam get message from /addPost/:id")
  });

module.exports = router;