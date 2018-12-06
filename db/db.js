var mysql = require('mysql');


//Note: to insert tht the database credential
var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '19919901',
  insecureAuth: true,
  database: 'chat'
});

//Note:create the connection
dbConnection.connect(function(err) {
  if (err) {
    console.log('access dinay to the database')
  } else {
    console.log('database has been connected')
  }
});

// Note:create the query tables
var queryCredentialTable = `
CREATE TABLE IF NOT EXISTS credential (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  firstname text NOT NULL ,
  lastname text NOT NULL ,
  email text NOT NULL ,
  phone text NOT NULL,
  username text NOT NULL,
  password text Not Null,
  PRIMARY KEY (id)
);
`

var queryPostsTable=`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER NOT NULL AUTO_INCREMENT ,
  userid INTEGER NOT NULL,
  image INTEGER NOT NULL ,
  color INTEGER NOT NULL ,
  category INTEGER NOT NULL ,
  title text NOT NULL,
  description text NOT NULL,
  name text Not Null,
  phone text Not Null,
  email text Not Null,
  cond text Not Null,
  availablity INTEGER Not Null,
  date text Not Null,
  status INTEGER Not Null,
  PRIMARY KEY (id)
);
`

// Note:create the table
dbConnection.query(queryCredentialTable, function(err, result) {
  if (result) {
    console.log('Credential table has been created');
  } else {
    console.log('Credential table return an ERROR');
  }
})

dbConnection.query(queryPostsTable, function(err, result) {
  if (result) {
    console.log('Posts table has been created');
  } else {
    console.log('Posts table return an ERROR');
  }
})



module.exports.db = dbConnection;
