const express = require('express');
const { createCustomer, getAllCustomers, updateCustomerStatus, getCustomers, updateCustomers} = require('../controllers/customerController');
const router = express.Router();

router.post('/', createCustomer);
router.get('/', getAllCustomers);
router.patch('/:id/status', updateCustomerStatus);
router.get('/:id', getCustomers);
router.put('/:id', updateCustomers);

module.exports = router;