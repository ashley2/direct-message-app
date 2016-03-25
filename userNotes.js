'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User;

var userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}
});

userSchema.statics.register = function(userObj, cb) {
  //0. check if username is taken - don't need bc using unique:true
  // User.findOne({username: userObj.username}, function(err, user){
  //   if(err || user) return cb(err || 'user name is already taken');
    //if it gets to here, we know the user name isn't taken
    //1. hash the password

    bcrypt.hash(userObj.password, 10, function(err, hash) {
      if(err) {
        return cb(err);
      }

      //2. create the new user document - using create method
      User.create({
        username = userObj.username;
        password = hash;
      }, function(err) {
        cb(err);
      })

      // //2. create the new user document
      // var newUser = new User();
      // newUser.username = userObj.username;
      // newUser.password = hash;
      //
      // //3. call the callback, with any error and the user
      // newUser.save(function(err) {
      //   cb(err);
      })
    })
  })
}

User = mongoose.model('User', userSchema);

module.exports = User;

///models'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');

var User;

var userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}
});

userSchema.statics.register = function(userObj, cb) {

    bcrypt.hash(userObj.password, 10, function(err, hash) {
      if(err) {
        return cb(err);
      }
      User.create({
        username: userObj.username,
        password: hash
      }, function(err) {
        cb(err);
    })
  })
}

userSchema.statics.authenticate = function(userObj, cb) {
    //check if username exists
  User.findOne({username: userObj.username}, function(err, dbuser) {
    if(err || !dbuser) {
      return cb("Authentication failed");
    }
    //compare the password to the hash = is pw good?
    bcrypt.compare(userObj.password, dbuser.password, function(err, isGood) {
    if(!isGood) {
      return cb("Authentication failed");
    } else {
      console.log('user inside model:', dbuser);
      //(for now) callback with the user document
      //(later) give them a token
      return cb(null, dbuser);
      }
    });
  });
}

User = mongoose.model('User', userSchema);

module.exports = User;
