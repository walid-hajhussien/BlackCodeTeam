var chai = require('chai');
var request = require('supertest');
var mysql = require('mysql');

describe('Server Test', function () {

  describe('Connection Test', function () {
    //test the connection with correct path
    it('Should have a response from the server ', function (done) {
      request('http://127.0.0.1:4000').get('/').expect(200, done)
    })
    //test the connection with the wrong path
    it('should resived error from the server with wrong path ', function (done) {
      request('http://127.0.0.1:4000').get('/wrong').expect(404, done)
    })

  })


  describe('Get Test', function () {
    // recived obj when request data
    it('we should recived an object "/user"', function (done) {
      request('http://127.0.0.1:4000').get('/user/').expect(200).end(function (err, res) {
        chai.assert.typeOf(res.body, 'object')
        done()
      })
    })

  })

  describe('POST Test', function () {
    // NOTE : register user
    it('should register user ', function (done) {
      request('http://127.0.0.1:4000').post('/user/signup').expect(200).send({
        firstName: 'test',
        lastName: 'test',
        phoneNumber: '07900',
        email: 'test@yahoo.com',
        username: 'test',
        password: '123'
      }).end(function (err, res) {

        chai.assert.equal(res.text, '1')
        done()

      })
    })
    //NOTE : login user
    it('should login with user credintial ', function (done) {
      request('http://127.0.0.1:4000').post('/user/login').expect(200).send({
        username: 'test',
        password: '123'

      }).end(function (err, res) {

        chai.assert.equal(res.text, '1')
        done()
      })

    })

  })
})

// NOTE : Database Test

describe('Database Test', function () {
  var dbConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "password",
    password: '19919901',
    insecureAuth: true,
    database: 'chat'
  })

  describe('Connection Test', function () {

    it('should connect to the database', function (done) {
      dbConnection.connect(function (err) {
        if (err) {} else {
          done();
        }
      });
    })



  })

  // NOTE : check the database query
  describe('Query Test', function () {
    it('should create table', function (done) {
      var query1 = `
      CREATE TABLE IF NOT EXISTS credential (
        id INTEGER NOT NULL AUTO_INCREMENT ,
        firstname text NOT NULL ,
        lastname text NOT NULL ,
        email text NOT NULL ,
        phone text NOT NULL,
        username text NOT NULL,
        password text Not Null,
        PRIMARY KEY (id)
      );`
      dbConnection.query(query1, function (err, result) {
        if (result) {
          dbConnection.end()
          done()
        }
      })


    })


  })
})