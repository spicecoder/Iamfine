const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let currentMoney = 0; // Initial money amount

// Route to fetch money
app.get("/money", (req, res) => {
  // Send the current money amount as JSON response
  res.json({ currentMoney });
});

// Route to update money (negative amount to represent taking out money)
app.put("/money/:amount", (req, res) => {
  const amount = parseInt(req.params.amount); // Amount to update
  if (amount >= 0) {
    // Send an error response for invalid amount
    res.status(400).json({ error: "Invalid amount. Amount to update must be negative." });
  } else {
    currentMoney += amount; // Update the current money amount
    // Send the updated amount as JSON response
    res.json({ currentMoney });
  }
});

// Route to add money
app.post("/money/:amount", (req, res) => {
  const amount = parseInt(req.params.amount); // Amount to add
  currentMoney += amount; // Add the amount to the current money amount

  // Send the updated amount as JSON response
  res.json({ currentMoney });
});

// Start the server
const port = 5020;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
