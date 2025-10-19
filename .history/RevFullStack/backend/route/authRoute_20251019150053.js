const express = require('express');
const router = express.Router();
const {Booking, TravelUser, ContactUsInfo, TravelUserLogin} = require('../controller/authController');

router.post('/booking',Booking);
router.post('/travelUser',TravelUser)
router.post('/contactusInfo',ContactUsInfo);
router.post('/travelUserLogin',TravelUserLogin)

module.exports = router;