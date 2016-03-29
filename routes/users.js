var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.status(err ? 499 : 200).send(err || users);
  });
});

router.get('/me', User.authMiddleWare, function(req, res) {
  res.send(req.user)
})

//get all users from db
router.get('/all', (req, res)=> {
  User.find({}, (err, data) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.send(data);
  })
})

router.post('/authenticate', function(req, res) {
  User.authenticate(req.body, function(err, token) {
    if(err) {
      res.status(499).send(err);
    } else {
      res.cookie('ashleycookie', token).send();
    }
  });
});

router.post('/register', function(req, res) {
  User.register(req.body, function(err) {
    res.status(err ? 499 : 200).send(err);
  });
});

router.put('/', (req, res) => {
 User.findByIdAndUpdate(req.body._id, req.body, (err, profile) => {
  console.log('req', req.body)
  if(err) {
    console.log('err', err)
    return res.status(499).send(err)
  }
  res.send(profile);
})
})

router.put('/', (req, res) => {
 User.findByIdAndUpdate(req.body._id, req.body, (err, profile) => {
  if(err) {
    return res.status(499).send(err)
  }
  res.end();
})
})



module.exports = router;
