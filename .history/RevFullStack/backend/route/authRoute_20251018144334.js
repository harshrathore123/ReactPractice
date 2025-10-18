const express = require('express');
const router = express.Router();
const {Booking} = require('./controller/authControl');
router.post('/booking',Booking);

module.exports = router;