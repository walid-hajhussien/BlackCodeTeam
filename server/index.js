// Embedded below is express setup
const express = require('express')
var bodyParser = require('body-parser')

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



// use routers
app.use('/user', router);

// listen for request
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Serve r is listening on port ${PORT}`);
});


