var passport = require ('passport');
var LocalStrategy = require('passport-local').Strategy;
var pg = require('pg');

// require module
var connection = require('../modules/connection');

// serialize and deserialize

// captilization = constructon
passport.use('local', new LocalStrategy(
  {
    passReqToCallback: true,
    usernameField: 'username'
  }, function(req, username, password, passportDone) { // passport done
      console.log('hit local strategy');

      pg.connect(connection, function(err, client, pgDone){
        if(err){
          console.log(err);
        }
        client.query('SELECT * FROM users WHERE username = $1', [username], function(err, result) {
          pgDone();

          if(err){
            console.log(err);
          }else{
            // found something
            console.log(result.rows);
            if(result.rows >= 1){
              var passwordDB= result.rows[0].password;


            }
          }
        });
      });
  }
));

module.exports = passport;
