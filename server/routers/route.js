var expres = require('express');
var dbConnection = require('../../db/db.js')
var bcrypt = require('bcrypt');
var passport = require('passport')

// setup the Router
var router = expres.Router();
// NOTE: declare varible , this varible is Object inside express help me to get the route method

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  var query = `select * from credential where id=\"${id}\"`
  dbConnection.db.query(query, function(err, data) {
    if (err) {
      return done(null, err)
    }
    done(null, data[0]);
  })



});

// NOTE: when user login
router.route('/login')

  .post(function(req, res) {
    console.log(req.body);


    var username = req.body.username;
    var password = req.body.password;
    var ip = req.body.ip;
    var query = `select * from credential where username=\"${username}\"`
    //NOTE: 0-->(No username) 1-->(password corect) 2-->(wrong password) 3-->(ERROR)

    dbConnection.db.query(query, function(err, result) {

      if (result) {
        if (result.length === 0) {
          res.send('0');

        } else {

          bcrypt.compare(password, result[0].password, function(err, data) {
            if (data) {
              //create the session
              var userId = result[0].id
              var user = result[0]
              var username=result[0].username
              console.log('User info-->',username)



              req.login(user, function(done) {
                req.session.cookie.expires = 3600000;
                var sid=req.sessionID
                query2=`insert into ip values (null,\"${ip}\",\"${sid}\",\"${userId}\",\"${username}\")`
                console.log('user-->',userId,sid,ip)
                console.log('query',query2)
                   dbConnection.db.query(query2, function(err, data) {
                         if (data) {
                        res.send(result)
                        } else {
                          res.send("3")
                         }
                    })



              })



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





// NOTE: when user signup
router.route('/signup')


  .post(function(req, res) {

    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;


    //NOTE: 0-->(Not save) 1-->(save correctly)
    bcrypt.hash(password, 12)
      .then(function(hashedPassword) {
        console.log('hashed password', hashedPassword);
        var query = `insert into credential values(null,\"${firstName}\",\"${lastName}\",\"${email}\",\"${phoneNumber}\",\"${username}\",\"${hashedPassword}\")`
        dbConnection.db.query(query, function(err, result) {
          if (result) {
            res.send("1")
          } else {
            console.log(err);
            res.send("0")
          }
        })
      })

  });

// NOTE: to destroy the session
router.route('/deletesession')

  .get(function(req, res) {
    var userid=req.user.id
    console.log('userid-->',userid)
    req.session.destroy();
    query=`delete from ip where userid=\"${userid}\"`
    console.log('query-->',query)
          dbConnection.db.query(query, function(err, result) {
        if (result) {
          res.send('1')
        } else {
          res.send("3")
        }
      })


  });

// NOTE: to check the user session
// 0-->(Not Authenticated) 3-->(Error)
router.route('/checkSession')
  .get(function(req, res) {
    if (req.isAuthenticated()) {
      console.log(req.user);
      var userId = req.user.id
      var query = `select * from credential where id=\"${userId}\"`
      dbConnection.db.query(query, function(err, result) {
        if (result) {

          res.send(result)
        } else {
          res.send("3")
        }
      })
    } else {
      res.send("0")
    }

  })

router.route('/userprofile')
  // NOTE: when user get somthing from the signup
  .post(function(req, res) {
    var id = req.body.id
    query = `select * from posts where userid=\"${id}\"`
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        res.send(result)
      } else {
        res.send("3")
      }
    })

  })
// api https://ident.me/  ,https://api.ipify.org/

// NOTE: when user get somthing from the addPost
router.route('/addpost')
  .post(function(req, res) {
    var userid = req.body.userid;
    var image = req.body.image;
    var color = req.body.color;
    var category = req.body.category;
    var title = req.body.title;
    var description = req.body.description;
    var name = req.body.name;
    var phone = req.body.phone;
    var Email = req.body.Email;
    var condition = req.body.condition.name;
    var availablity = req.body.availablity;
    var date = req.body.date;
    var status = req.body.status;
    var btnName = req.body.btnName;
    console.log(req.body);

    // NOTE: Query to insert the post information
    var query = `insert into posts values
    (null,\"${userid}\",\"${image}\",\"${color}\",\"${category}\",\"${title}\",\"${description}\",\"${name}\"
  ,\"${phone}\",\"${Email}\",\"${btnName}\",\"${condition}\",\"${availablity}\",\"${date}\",\"${status}\")`

    // NOTE: insert post information to the database
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        res.send("1")
      } else {
        res.send("0")
      }
    })


  });



// NOTE: contact us
router.route('/contact')
  .post(function(req, res) {

    console.log(req.body)
    res.send('done');

  });

// NOTE: retriveposts
router.route('/retriveposts')
  .get(function(req, res) {

    var query = `select * from posts where status=1`
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        res.send(result)
      } else {
        res.send("0")
      }
    })




  });




  //retriveuser

  router.route('/retriveuser')
  .get(function(req, res) {

    var query = `select * from ip `
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        console.log('result',result)
        res.send(result)
      } else {
        res.send("0")
      }
    })
  });

// NOTE: deleteip
  router.route('/deleteip')
  .post(function(req, res) {
    var userid=req.body.userid;
    var sid=req.body.sid;
    console.log('ip',req.body);
    var query1 = `delete from ip where userid=\"${userid}\"`
    var query2 = `delete from sessions where  session_id=\"${sid}\"`
    dbConnection.db.query(query1, function(err, result) {
      if (result) {
        console.log('result1',result)
        dbConnection.db.query(query2, function(err, data) {
          if (data) {
            console.log('result2',data)
            res.send('1')
          } else {
            res.send("0")
          }
        })
      } else {
        res.send("0")
      }
    })
  });

  // NOTE: update updatestatus

  router.route('/updatestatus')
  .post(function(req, res) {
    var postid=req.body.id
    var status=req.body.status

    var query = `update posts set status=\"${status}\" where id=\"${postid}\"`
    console.log('query',query);
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        console.log('resultdb',result)
        res.send('1')
      } else {

        res.send('0')
      }
    })
  });





  // NOTE: delete post
  router.route('/deletepost')
  .post(function(req, res) {
    var postid=req.body.id

    var query = `delete from posts where id=\"${postid}\"`
    console.log('query',query);
    dbConnection.db.query(query, function(err, result) {
      if (result) {
        console.log('delete',result)
        res.send('1')
      } else {
        res.send('0')
      }
    })
  });



module.exports = router;
