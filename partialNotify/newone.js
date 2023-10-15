const admin = require('firebase-admin');
const serviceAccount = require('./khlogin.json'); // Replace with the path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const registrationToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyZTgyNzMyYjk3MWExMzVjZjE0MTZlOGI0NmRhZTA0ZDgwODk0ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va2hsb2dpbi0wMSIsImF1ZCI6ImtobG9naW4tMDEiLCJhdXRoX3RpbWUiOjE2OTcwMTYyNjUsInVzZXJfaWQiOiIyVHV6MmVQSHZIVnU5N2JPaWVmVjFLVG54YTEyIiwic3ViIjoiMlR1ejJlUEh2SFZ1OTdiT2llZlYxS1RueGExMiIsImlhdCI6MTY5NzEwMTMwNywiZXhwIjoxNjk3MTA0OTA3LCJlbWFpbCI6ImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNvbmNyZXRlZWVkaXJlZDY5QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.g4J-yir5ugsJNXurZIHfYbe1gBhN-Mphph6xrJvcbQ0d1aQxFYLD76bHqrdU76f6dSRRT4c3ok59mntKPj9vIYdyZ-EMJfjZM7MAzkMXm2F-bKnSSKYbqKXm8OL82Vl04mNKu_b2URb4JJ6BwFk9rBFMbSYf2BtegXMDJs6ElV3RGL2JCyh88amJuaHshYC1rVNAV3Dvqs3lHuPmTOP66khHEXBtzCOMZHewcOYMVRiQBcQWUIhNX1H0zFsuSzrWd20IWuMzSOIV4F98D7Z62RG7GLm2pNeT8rouFy-BpHz4B4jRPj81scmZ9eUgZczZvrab40mgrD-sO3PglqNtdw'; // Replace with the actual device token

const message = {
  data: {
    title: 'Good news 2233',
    body: 'Hello, I am sending a push message.',
  },
  token: registrationToken,
};

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.error('Error sending message:', error);
  });
