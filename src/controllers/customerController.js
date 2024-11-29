const Customer = require('../models/Customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, isAllowedToOrder } = req.body;

    const customer = await Customer.create({ name, email, isAllowedToOrder });
    res.status(201).json(customer);
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

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get a single customer by ID
exports.getCustomers = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.status(200).json(customer);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update customer status (allow/disallow ordering)
exports.updateCustomerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isAllowedToOrder } = req.body;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    customer.isAllowedToOrder = isAllowedToOrder;
    await customer.save();

    res.status(200).json({ message: 'Customer status updated', customer });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update customer details
exports.updateCustomers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, isAllowedToOrder } = req.body;

    const customer = await Customer.findByPk(id);

    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    customer.name = name || customer.name;
    customer.email = email || customer.email;
    customer.isAllowedToOrder =
      isAllowedToOrder !== undefined ? isAllowedToOrder : customer.isAllowedToOrder;

    await customer.save();

    res.status(200).json({ message: 'Customer updated', customer });
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
