var express = require('express');
var pg = require('pg');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

// require routers. making the connection to index.js router. PULLING IN INDEX AND STORING IN INDEX
var index = require('../routes/index');
var register = require('../routes/register');

// let server file know how to use the index file. IN ANY ROUTES WE WANT TO GO TO INDEX FILE
app.use('/register', register);
app.use('/*', index); // login page


app.listen(8080, function(){
  console.log("listening on 8080");
});