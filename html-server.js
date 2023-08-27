const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`HTML Server is running on port ${PORT}`);
});
