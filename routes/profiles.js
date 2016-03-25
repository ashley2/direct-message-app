
'use strict'

var express = require('express');
var router = express.Router();

var Profile = require('../models/user');


router.put('/', (req, res) => {
 Profile.findByIdAndUpdate(req.body._id, req.body, (err, profile) => {
    if(err) {
      return res.status(499).send(err)
    }
    res.end();
  })
})