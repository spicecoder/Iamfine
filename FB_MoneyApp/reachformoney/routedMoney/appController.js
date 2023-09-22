// moneyRoutes.js exposes the server

const express = require('express');
const moneyRoutes = require('./routes/money/moneyRoutes');
const jokeRoutes = require('./routes/joke/jokeRoutes');

const app = express();

// Use the userRoutes router
app.use('/money', moneyRoutes);
app.use('/joke', jokeRoutes);
// Start the server
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
