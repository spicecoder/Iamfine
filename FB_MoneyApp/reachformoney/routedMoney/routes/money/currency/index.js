// index.js
const express = require('express');
const router = express.Router();
const currencies = [
    'Rupee',
    'Dollar',
    'Yen',
    'Pound',
    'Kyat'
  ];

router.get('/', (req, res) => {
  
    const randomCurrency = currencies[Math.floor(Math.random() * currencies.length)];
  
  const currency = randomCurrency;
 
  // ...
  res.json({currency});
});
// GET /users/:id/:subject
router.get('/:currency', (req, res) => {
  const inCurrency = req.params.currency
  console.log("currency "+ inCurrency)
const currencyposition = currencies.indexOf(inCurrency)

res.json({currencyposition});
});

module.exports = router;