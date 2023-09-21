// moneyRoutes.js exposes the server

const express = require('express');
const moneyRoutes = require('./moneyRoutes.js');


const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
const cors = require('cors');
app.use(cors());

// Use the userRoutes router
app.use('/api/razorpayment', moneyRoutes);



app.get('/', (req, res) => {
    res.send('Pay kh  Running');
});

// Start the server
const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
