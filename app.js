const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/db');
const customerRoutes = require('./src/routes/customerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const app = express();
const path = require('path');

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
