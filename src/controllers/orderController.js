const Order = require('../models/Order');
const Customer = require('../models/Customer');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerId, items, totalAmount } = req.body;

    // Check if the customer exists and is allowed to place an order
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    if (!customer.isAllowedToOrder) {
      return res.status(400).json({ error: 'Customer is disallowed from ordering' });
    }

    // Create the order
    const order = await Order.create({
      customerId,
      items,
      totalAmount,
      status: 'Pending', // Default status
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors.map(err => err.message),
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single order by ID
exports.getOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update order details (items, total amount)
exports.updateOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const { items, totalAmount } = req.body;

    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    order.items = items || order.items;
    order.totalAmount = totalAmount || order.totalAmount;

    await order.save();

    res.status(200).json({ message: 'Order updated', order });
  } catch (error) {
    console.error('Error:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors.map(err => err.message),
      });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Confirm an order (Change status to 'Confirmed')
exports.confirmOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.status === 'Confirmed') {
      return res.status(400).json({ error: 'Order is already confirmed' });
    }

    // Update status to 'Confirmed'
    order.status = 'Confirmed';
    await order.save();

    res.status(200).json({ message: 'Order confirmed', order });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};