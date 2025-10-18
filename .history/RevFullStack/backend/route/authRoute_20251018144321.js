const express = require('express');
const router = express.Router();
const contoller = require('../controller/authControl');
router.post('/booking',Booking);

module.exports = router;