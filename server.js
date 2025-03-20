const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require('body-parser');
const cors = require('cors');
const { loginHandlers } = require('./src/login');
const { getAllItems } = require('./src/getAllItems');

// const handlers = require('./src/app').handlers;

// Initialize express server
const server = express();
server.use(cors());
server.use(bodyParser.json());

// Middleware to log requests
server.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next(); // Call the next middleware or route handler
});
// Create POST route
server.post('/api/method/login', loginHandlers);
server.get('/api/resource/Item/all', getAllItems);

// Start express server
server.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
