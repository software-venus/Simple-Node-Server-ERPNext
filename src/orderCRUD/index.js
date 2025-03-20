const express = require('express');
const router = express.Router();
const { getAllOrdersCtr } = require('./getAllOrders');
const { createOrderCtr } = require('./createNewOrder');

router.get('/', getAllOrdersCtr);
router.post('/', createOrderCtr);

module.exports = router;
