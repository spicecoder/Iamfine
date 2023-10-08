const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./khlogin.json"); 
const bodyParser = require("body-parser");
const cors = require("cors");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let uiToken = null;
let uimsg = null;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  // Allow requests from any origin
  res.header('Access-Control-Allow-Origin', '*');

  // Allow specific HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Allow specific headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.post("/recieve", (req, res) => {
    const userInput = req.body.userInput;
    console.log("Received user input:", userInput);
    res.json({ message: "User input received successfully" });
    uimsg = userInput;
});

app.post("/recieveToken", (req, res) => {
  const userInput = req.body.userInput1;
  console.log("Received user input1:", userInput);
  res.json({ message: "User input received successfully" });
  uiToken = userInput;
});



  app.get('/send-notification', async (req, res) => {
  try {
    const targetToken ="drYLpc-JysKEkhnCseVjr3:APA91bFxuSK5biFS2220uLvo08g5qMMXKQBlnO0--F23MD6NJQs-bCtKVwEXx28kCSvwjm3tC6iw_pCApfrBAdmNPjH0xrtn4BtJe0ctuVk4RR7rJ7jmWzNCDs70Bs-6lB9c15kQhBPH"; // Retrieve the token from the URL
    const message = {
      notification: {
        title: 'KITCHEN HAMARA',
        body: uimsg
      },
      token: targetToken, // Targeting a specific token
    };

    // Send the notification
    const response = await admin.messaging().send(message);
    res.json({ messageId: response });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification.');
  }
});

app.get('/send-token', async (req, res) => {
  try {
    const targetToken ='crJPaeBxKsoa_hL6u76akC:APA91bGNqOUGZthV8nJY2f44xGO_77MCdkWMedBQnuAHJ9lpXoSKu9jGLqj9sScBj1-1-2CWNcd7tF9JvSDYRQAAMvONRk4sr0ddxI14tMZEBlJNVa1wlEgHZZDvffJQkWLPuqy4T1Ql'
 // Retrieve the token from the URL
    const message = {
      notification: {
        title: 'KITCHEN HAMARA',
        body: uiToken
      },
      token: targetToken, // Targeting a specific token
    };

    // Send the notification
    const response = await admin.messaging().send(message);
    res.json({ messageId: response });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification.');
  }
});


// Start the server
const port = 5020;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
