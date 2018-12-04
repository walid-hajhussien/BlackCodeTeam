var expres = require('express');
var dbConnection = require('../../db/db.js')
var bcrypt = require('bcrypt');
// setup the Router
var router = expres.Router();
// NOTE: declare varible , this varible is Object inside express help me to get the route method

// NOTE: when user login
router.route('/login')

  .post(function (req, res) {
    console.log(req.body);


    var username = req.body.username;
    var password = req.body.password;
    var query = `select * from credential where username=\"${username}\"`
    //NOTE: 0-->(No username) 1-->(password corect) 2-->(wrong password) 3-->(ERROR)

    dbConnection.db.query(query, function (err, result) {

      if (result) {
        if (result.length === 0) {
          res.send('0');

        } else {
          // NOTE:  result[0].password
          bcrypt.compare(password, result[0].password, function (err, data) {
            if (data) {
              res.send(result)
            } else {
              res.send('2');
            }

          })


        }

      } else {
        res.send('3');
        console.log('pasdpasdpaspd', result[0].password);

      }
    })

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

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;


    //NOTE: 0-->(Not save) 1-->(save correctly)
    bcrypt.hash(password, 12)
      .then(function (hashedPassword) {
        console.log('hashed password', hashedPassword);
        var query = `insert into credential values(null,\"${firstName}\",\"${lastName}\",\"${email}\",\"${phoneNumber}\",\"${username}\",\"${hashedPassword}\")`
        dbConnection.db.query(query, function (err, result) {
          if (result) {
            res.send("1")
          } else {
            res.send("0")
          }
        })
      })

  });

router.route('/signup')
  // NOTE: when user get somthing from the signup
  .get(function (req, res) {
    console.log("ya iam get message from /signup");
    res.send('hello world from server /signup');
  });


// NOTE: when user get somthing from the addPost
router.route('/addpost')
  .post(function (req, res) {
    var userid=req.body.userid;
    var image = req.body.image;
    var color = req.body.color;
    var category = req.body.category;
    var title = req.body.title;
    var description = req.body.description;
    var name = req.body.name;
    var phone =req.body.phone;
    var Email=req.body.Email;
    var condition=req.body.condition.name;
    var availablity=req.body.availablity;
    var date =req.body.date;
    var status=req.body.status;
    console.log(req.body);

    // NOTE: Query to insert the post information
    var query = `insert into posts values
    (null,\"${userid}\",\"${image}\",\"${color}\",\"${category}\",\"${title}\",\"${description}\",\"${name}\"
  ,\"${phone}\",\"${Email}\",\"${condition}\",\"${availablity}\",\"${date}\",\"${status}\")`

  // NOTE: insert post information to the database
  dbConnection.db.query(query, function (err, result) {
    if (result) {
      res.send("1")
    } else {
      res.send("0")
    }
  })


  });



// NOTE: contact us
router.route('/contact')
  .post(function (req, res) {

    console.log(req.body)
    res.send('done');

  });

  // NOTE: retriveposts
  router.route('/retriveposts')
    .get(function (req, res) {
        
      console.log(req.body)
      res.send('done');

    });

module.exports = router;
