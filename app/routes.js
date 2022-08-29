const express = require('express');
const router = express.Router();
const mime = require('mime-types');

const EventController = require('./controller/EventController');

//province
router.post('/api/todo/create', EventController.create);

// router.post('/api/login/', EventController.signInUser);
 router.get('/api/todo', EventController.index);
// router.get('/api/event/:id', EventController.find, EventController.show);
// router.patch('/api/event/update/:id', EventController.find,EventController.update);



module.exports = router;
