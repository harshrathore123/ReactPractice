const express = require('express');
const { Register } = require('../controller/auth_controller');
const { default: Login } = require('../../frontend/src/component/Login');
const router = express.Router();

router.post('/register',Register);
router.post('/login',Login)

module.exports = router;