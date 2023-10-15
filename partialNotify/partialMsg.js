const admin = require('firebase-admin');
const serviceAccount = require('./khlogin.json'); // Replace with the path to your Firebase service account JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function pushNotification(deviceID) {
    //Passing the device id to whom notification to be sent
    const tokens = [deviceID];
    
    const payload = {
     notification: {
      title: "good news",
      body: "hello I am sending a push message.",
      
     },
    };
    //triggers push notification to the targeted devices.
    return admin.messaging().sendToDevice(tokens, payload);
   }
   const deviceID = 'fh4BN6GaYsvOpgNdOTH5wT:APA91bFC8yWQwvLQ7L0gfrF19GB9kEjVao6Zs7Tm-hoHUNVhBSappCIPRB3JFvcP7-Lp5JZiBWpxV5nV3Gy6r9Q_AfnqiR9lWwQFwNVXthY2U9pyN9E6X8DMhKGRNm2mZPLngMyOkPuJ'; // Replace with the actual device token

pushNotification(deviceID)
  .then((response) => {
    console.log('Successfully sent notification:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });
