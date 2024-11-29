const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,  // This is required
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,  // This is required
    unique: true,  // Ensures email is unique
  },
  isAllowedToOrder: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Customer;