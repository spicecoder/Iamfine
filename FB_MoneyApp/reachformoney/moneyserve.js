const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Route to fetch money
app.get("/money", (req, res) => {
  // Generate a random amount between 1 and 100
  const amount = Math.floor(Math.random() * 100) + 1;

  // Send the amount as JSON response
  res.json({ amount });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
