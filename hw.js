'use strict';

//both in protected authMiddleWare
//send a message
router.post('/messages') {

var message = new Message({
  sender: who is logged in, req.user.id
  receiver:
  body:
  }
})

//get all of a signed in users messages
router.get('/messages/inbox', User.authMiddle, function(req, res) {
  Message.find({receiver: req.user._id}, function(err, messages) {

  })
})

//logout
//post to logout that clears the cookie
