const express = require('express');
const router = express.Router();
const { getAllItemsCtr } = require('./getAllItems');

router.get('/', getAllItemsCtr);

module.exports = router;
