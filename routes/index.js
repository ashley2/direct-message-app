var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res, next) {
  console.log(req.cookies);
  res.render('index', { title: 'Express' });
});

///protected zone from here below now
router.use(User.authMiddleWare);

// GET /protected
router.get('/protected', User.authMiddleWare, function(req, res) {
  console.log('req.user:', req.user);
  res.send('protected!');
});

module.exports = router;
//get the token from res.cookies.ashleycookie
//try to decode the token using jwt-simple
//if the token is good, send something positive
//if the token is bad, send a failure code status 401 - unauthorized

// router.get('/protected', function(req, res, next) {
//   var token = req.cookies.ashleycookie;
//   console.log("token", token);
//
//   if(!token) {
//     return res.status(401).send('No token. Get one!');
//   }
//   try {
//     var payload = jwt.decode(token, JWT_SECRET);
//   } catch (err) {
//     console.log(('err:', err);
//     res.status(401).send(err);
//     res.clearCookie('ashleycookie');
//     return;
//   }
// res.send('protected!');
// });
