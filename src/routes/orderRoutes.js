const express = require('express');
const { createOrder, confirmOrder, getAllOrders, getOrders, updateOrders } = require('../controllers/orderController');
const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrders);
router.put('/:id', updateOrders);
router.patch('/:id/confirm', confirmOrder);

module.exports = router;
