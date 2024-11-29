const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Customer = require('./Customer');

const Order = sequelize.define('Order', {
  orderDetails: { type: DataTypes.TEXT, allowNull: false },
  isConfirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
});

Order.belongsTo(Customer, { foreignKey: 'customerId' });

module.exports = Order;
