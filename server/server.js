var express =require('express');
var bodyParser=require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')


var app = express();



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../client'));
app.use(express.static(__dirname + '/../node_modules'));

// add bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//NOTE : add session 
app.use(cookieParser());
app.use(session({
  secret: 'huhkjhjgyftdtgi45',
  resave: false,
  saveUninitialized: true
}))


app.get('/data',function(req,res){
	res.send('done')
})

var ip ="127.0.0.1"
var port=process.env.PORT||5000
app.listen(port);
console.log('listen to ip :'+ip +' and port :'+port);
