const express = require('express');
const router = express.Router();
const {Booking, TravelUser, ContactUsInfo} = require('../controller/authController');
router.post('/booking',Booking);
router.post('/travelUser',TravelUser)
router.post('/contactusInfo',ContactUsInfo);
module.exports = router;