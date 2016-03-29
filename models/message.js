'use strict';

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  sender: {type: String},
  reciever: {type: String},
  body: {type: String},
  title: {type:String}
});