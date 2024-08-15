const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./src/config/db');

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => console.log('Error syncing database: ' + err));

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
