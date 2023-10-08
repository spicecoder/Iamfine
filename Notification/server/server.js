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
    const targetToken ='eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhNTE5MDc0NmU5M2JhZTI0OWIyYWE3YzJhYTRlMzA2M2UzNDFlYzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va2hsb2dpbi0wMSIsImF1ZCI6ImtobG9naW4tMDEiLCJhdXRoX3RpbWUiOjE2OTY3MzU1MDMsInVzZXJfaWQiOiIyVHV6MmVQSHZIVnU5N2JPaWVmVjFLVG54YTEyIiwic3ViIjoiMlR1ejJlUEh2SFZ1OTdiT2llZlYxS1RueGExMiIsImlhdCI6MTY5NjczNTUwMywiZXhwIjoxNjk2NzM5MTAzLCJlbWFpbCI6ImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.Q5RuGWkSsAZ_S0uEhUigiv_0j_04Wjv7dnzvuEJl5e_UvcOVomHPqAKNbqe4bb-gt4xUj-PGmmO-sUR1lWO-bPrgM6onUPREoiHPIS6h5qoY3cbidQjU0m35ZO4HCrCvgWqOnjeJvuvw-ANMUZhJhvboK-P06MXzsbxsgG0G-0wmMC1DVxPK-oOdjrS0Yv4U6mSvQ0_BKf_38sVg8iPZvkO3GSf8SmjHHtfDkOn_HASj8WmPneKoTwyy9rWtOGL3j3v_CDZqW44MbeesOdI46b_lC412K1eBdAL5l1QDynfBZbY10dfkpkWbEkDSQYLsya---lfZad9-DNx-RQxyDw'//e token from the URL
    const message = {
      notification: {
        title: 'KITCHEN HAMARA',
        body: "uimsg"
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
    const targetToken ='crJPaeBxKsoa_hL6u76akC:APA91bH4KBALQJ6l5id4dczrVHv-rw58l9l_hGyx1MWhGvDCr30VncupBEKpRGr0cbsMyQoFNdbPYgJ-8r_Eeu-WyIMSIBql2d-ijtREjRvd40dhFwix5NhC_CcFCMa5RHj6fDVhnwqK'; // Retrieve the token from the URL
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
