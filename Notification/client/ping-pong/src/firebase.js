


import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getMessaging,getToken,onMessage} from 'firebase/messaging'
const firebaseConfig = {

  apiKey: "AIzaSyAJA0esCg6gB0rUBBm6iBmcSIanrW4GAQ4",

  authDomain: "khlogin-01.firebaseapp.com",

  databaseURL: "https://khlogin-01.firebaseio.com",

  projectId: "khlogin-01",

  storageBucket: "khlogin-01.appspot.com",

  messagingSenderId: "405781304253",

  appId: "1:405781304253:web:d82a78fc10c387a85978d4",

  measurementId: "G-L887L4HMFE"

};
// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const messaging = getMessaging();
const atoken = await getToken(messaging);
export {atoken};
export {app}
export {auth}
export const  requestForToken= () => {
<<<<<<< HEAD
  
  
=======
  messaging.requestPermission()
    .then(() => {
      console.log('Notification permission granted.');
      // Get the token and potentially send it to your server
      //return messaging.getToken();
    })
    .then(token => {
      console.log('FCM Token:', token);
    })
    .catch(error => {
      console.log('Error requesting notification permission:', error);
    }); 
>>>>>>> main
  return getToken(messaging, { vapidKey: `BCV1N_G2oj3_tQuXmM78QQVje_WdkYDyqbUONJMaUMovfDrPKTs8mbSktvgoptdJxHwtSjck_0xs3T-aNCxFsXQ` })
    
      .then((currentToken) => {
      if (currentToken) {
      //   atoken = currentToken;
      //  // currentToken = token;

        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
     
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });


  export const displayCurrentToken = () => {
    
    const resultElement = document.getElementById('result-box');
<<<<<<< HEAD
    console.log(token)
    if (token) {
      resultElement.textContent = 'Current Token: ' + token;
=======
  
    if (atoken) {
      resultElement.textContent = 'Current Token: ' + atoken;
>>>>>>> main
    } else {
      resultElement.textContent = 'No current token available. Please request one.';
    }
  };