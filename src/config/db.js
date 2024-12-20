const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize.sync({ force: false })
  .then(() => console.log('Database synced!'))
  .catch(err => console.error('Sync failed:', err));

module.exports = sequelize;
