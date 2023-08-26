const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to set permissive CORS headers
app.use((req, res, next) => {
  // Allow requests from any origin
  res.header('Access-Control-Allow-Origin', '*');

  // Allow specific HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Allow specific headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

// Define a route
app.get('/data', (req, res) => {
  res.json({ message: 'This is Kitchen Hamara monthly cooks Report' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});
