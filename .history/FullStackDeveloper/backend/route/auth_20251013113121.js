const express = require('express');
const { Register,Login, Menu } = require('../controller/auth_controller');
const router = express.Router();

router.post('/register',Register);
router.post('/login',Login); 
router.get('/menu',Menu);
//router.post('routepath','controlvariable');

module.exports = router;