// server file and basically an extension of app.js

var express = require('express');
var router = express.Router(); // just grabbing the code to do a router instead of express()
var path = require('path');

router.get('/', function (req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});

module.exports = router; 
