var express = require('express');
var router = express.Router();

var path = require('path');
var pg = require('pg');

// Require modules
var connection = require('../modules/connection');

// this will be /register.
// * the word register is taken off of app.use from app.js file and placed to this '/'
// that's why you don't need '/register'
router.get('/', function (req,res){
  res.sendFile(path.resolve('public/views/register.html'));
});

// *Again, don't need '/register' becuase that will show up
router.post('/', function(req,res){
  console.log('hit register post route');
  console.log('username = ', req.body.username);
  console.log('password = ', req.body.password);

// time to insert into a DB
// Connecting to DB
  pg.connect(connection, function(err, client, done){
    client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id", [req.body.username, req.body.password], function(err, result) {

      done();

      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        console.log(result);
        console.log("success", result.rows[0].id);
        res.redirect('/');
      }
    });
  });
});

module.exports = router;
