var passport = require ('passport');
var LocalStrategy = require('passport-local').Strategy;

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
  }
));

module.exports = passport;
