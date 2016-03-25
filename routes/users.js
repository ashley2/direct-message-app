var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    res.status(err ? 499 : 200).send(err || users);
  });
});

router.get('/me', (User.authMiddleware, function(req,res) {

  console.log(req.user)
  res.send(req.user)
}))


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
 Profile.findByIdAndUpdate(req.body._id, req.body, (err, profile) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})



module.exports = router;
