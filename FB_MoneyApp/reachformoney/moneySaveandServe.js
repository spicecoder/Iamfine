const express = require("express");
const cors = require("cors");
const serviceAccount = require("./khlogin.json"); 
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const app = express();
app.use(cors());
app.use(bodyParser.json());

let currentMoney = 0; // Initial money amount


app.post('/send-notifi', async (req, res) => {
  try {
    const targetToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va2hsb2dpbi0wMSIsImF1ZCI6ImtobG9naW4tMDEiLCJhdXRoX3RpbWUiOjE2OTcwMTYyNjUsInVzZXJfaWQiOiIyVHV6MmVQSHZIVnU5N2JPaWVmVjFLVG54YTEyIiwic3ViIjoiMlR1ejJlUEh2SFZ1OTdiT2llZlYxS1RueGExMiIsImlhdCI6MTY5NzMzNjcwMSwiZXhwIjoxNjk3MzQwMzAxLCJlbWFpbCI6ImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.CalNXhuuaoMnCNPg6jnRUSICAus-0UFqcu4fmU4qtVufYfPZFZnqtkF1RRf3KU9h6ZTImJI7cxEERE3e87Aczo1h5Pqbvdc40977xn60ccn7800qwFimQUYaON7ASqNwQv1nANTU37mj37Ch3BcgvAqESOukfks0ZkoJGrUKJj40_U1u-Od5hX_18hjlxQRm4cLJsv4EzQfucxH1rQn_d1ah83G2-DAzkU6qN-42AOsaHxzhTmU2q_D8j8kR0r4hwu9Uu0y8S7RVlwsYnP6oiCAdrf-CDY40RvisDIi-XC9XBXq9xohuxmYEHHtJRTEsdSov1Bu2SiDNDNx8RhQWRQ";//e token from the URL
    //"eT3dRPmg30HKLR3KRqGrNB:APA91bHvK1JD6RXgiJPqbP1frubxij2pjf8IgMHIqSXG8SjKlZXIPd9u3Ip54-p0fpYZQOdzGgwHVjsiHm49J6eEFcOFHdrSCjN4_bnFWjMpdSYKHvUAvtaHjchev1KxRU2OyfkHKytA"
    console.log(targetToken);
    const uimsg = req.body.chat;
    console.log(uimsg);
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
