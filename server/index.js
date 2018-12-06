// Embedded below is express setup
const express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session');
var cookieParser = require('cookie-parser')
var passport=require('passport')
var MySQLStore = require('express-mysql-session')(session);
var dbConnection = require('../db/db.js')

// NOTE: require the Routers
var router = require('./routers/route.js');
const app = express();


// NOTE : add the allow origion
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//NOTE:add the static file
app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//add session
app.use(cookieParser());
var sessionStore = new MySQLStore({}, dbConnection.db);
app.use(session({
  secret: 'huhkjhjgyftdtgi45',
  resave: false,
  store: sessionStore,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());


// use routerss
app.use('/user', router);



// listen for request
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serve r is listening on port ${PORT}`);
});
