// moneyyRoutes.js
const express = require('express');
const currencyRoutes = require('./currency/index.js');

const router = express.Router();
router.get('/', (req, res) => {
  // Retrieve subject-specific data for the specified ID
  const result = "you start with 7000" ;
  
  // ...
  res.json({result});
});
router.get('/:money', (req, res) => {
  // Retrieve subject-specific data for the specified ID
  const result = 7000+ parseInt(req.params.money); ;
  
  // ...
  res.json({result});
});

router.use('/:money/currency', currencyRoutes);
module.exports = router;
