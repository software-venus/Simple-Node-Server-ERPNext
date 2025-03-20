const express = require('express');
const router = express.Router();
const { loginCtr } = require('./login.js');

router.post('/login', loginCtr);

module.exports = router;
