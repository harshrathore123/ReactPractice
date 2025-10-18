const express = require('express');
const router = express.Router();
const {Booking, TravelUser} = require('../controller/authController');
router.post('/booking',Booking);
router.post('/travelUser',TravelUser)

module.exports = router;