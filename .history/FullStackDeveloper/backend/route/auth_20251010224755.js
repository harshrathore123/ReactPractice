const express = require('express');
const { Register } = require('../controller/auth_controller');
const router = express.Router();

router.post('/register',Register);

module.exports = router;