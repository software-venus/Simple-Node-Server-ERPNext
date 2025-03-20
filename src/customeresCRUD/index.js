const express = require('express');
const router = express.Router();
const { getAllCustomersCtr } = require('./getAllCustomers');

router.get('/', getAllCustomersCtr);

module.exports = router;
