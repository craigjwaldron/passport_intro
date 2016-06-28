var express = require('express');
var router = express.Router();
var path = require('path');

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
  console.log('username = ', req.body.password);

  res.sendStatus(200);
});

module.exports = router;
