// Embedded below is express setup


const express = require('express')
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());


// NOTE:
// this i will lines i will use  it when conect whit client
// app.use(express.static(__dirname + '/../client'));
//app.use('/scripts', express.static(path.join(__dirname,
//'node_modules')));


// listen for request
const port = process.env.port;

app.listen(port || 4000, function () {
  console.log('server now listening for requests on port : 4000');
});