const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./src/auth');
const itemRoutes = require('./src/itemsCRUD');
const customerRoutes = require('./src/customeresCRUD');
const salesOrderRoutes = require('./src/orderCRUD');


// Initialize express server
const server = express();
server.use(cors());
server.use(bodyParser.json());

// Middleware to log requests
server.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // Call the next middleware or route handler
});
// Set Routes
server.use('/api/method', authRoutes);
server.use('/api/resource/Item', itemRoutes);
server.use('/api/resource/Customer', customerRoutes);
server.use('/api/resource/Sales%20Order', salesOrderRoutes);


// Start express server
server.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
