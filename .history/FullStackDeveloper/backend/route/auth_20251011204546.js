const express = require('express');
const { Register,Login } = require('../controller/auth_controller');
const router = express.Router();

router.post('/register',Register);
router.get('/login',Login)

module.exports = router;