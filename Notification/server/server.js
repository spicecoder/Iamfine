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
    const targetToken ='crJPaeBxKsoa_hL6u76akC:APA91bGgUYZyM8Ma02DkOhb9ST0ZThnNm0ai0vl_K_EUNkQ23KUgG9uRzhJ5S5WNGW2OBYCbAPz8kCW-2nREDVGqfyi_v9bQpfAX89TLyf_nuGSomwVR4uhTJAD--wLfRDNM8eA7SObg'; // Retrieve the token from the URL
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
    const targetToken ='crJPaeBxKsoa_hL6u76akC:APA91bGgUYZyM8Ma02DkOhb9ST0ZThnNm0ai0vl_K_EUNkQ23KUgG9uRzhJ5S5WNGW2OBYCbAPz8kCW-2nREDVGqfyi_v9bQpfAX89TLyf_nuGSomwVR4uhTJAD--wLfRDNM8eA7SObg'; // Retrieve the token from the URL
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
