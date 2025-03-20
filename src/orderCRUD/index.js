const express = require('express');
const router = express.Router();
const { getAllOrdersCtr } = require('./getAllOrders');

router.get('/', getAllOrdersCtr);

module.exports = router;
