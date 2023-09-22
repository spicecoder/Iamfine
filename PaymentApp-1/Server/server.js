
const express = require('express');
const app = express();
const PORT = 3000;

const razorPaymentRoute = require('./razor_payment_route.js');
app.use('/api/razorpayment', razorPaymentRoute.router);

app.get('/', (req, res) => {
    res.send('Express Server Running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
