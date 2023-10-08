const express = require('express');
const router = express.Router();
// Joke data
const jokes = [
    'Why did the tomato turn red? Because it saw the salad dressing!',
    'Why don’t scientists trust atoms? Because they make up everything!',
    'What do you call a fake noodle? An impasta!',
    'Why do we tell actors to “break a leg?” Because every play has a cast!',
    'What do you call an alligator in a vest? An investigator!'
  ];
  
  // Route to fetch a random joke
  router.get('/', (req, res) => {
    // Get a random joke from the jokes array
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
    // Send the joke as a JSON response
    res.json({ joke: randomJoke });
  });
 
module.exports = router; 