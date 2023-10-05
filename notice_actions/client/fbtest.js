firebaseConfig = {
    apiKey: "AIzaSyAJA0esCg6gB0rUBBm6iBmcSIanrW4GAQ4",
    authDomain: "khlogin-01.firebaseapp.com",
    databaseURL: "https://khlogin-01.firebaseio.com",
    projectId: "khlogin-01",
    storageBucket: "khlogin-01.appspot.com",
    messagingSenderId: "405781304253",
    appId: "1:405781304253:web:d82a78fc10c387a85978d4",
    measurementId: "G-L887L4HMFE"
  };
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const messaging = getMessaging();
let token = null;
export {app}
export {auth}
export const  requestForToken= () => {
  return firebase.getToken(messaging, { vapidKey: `BCV1N_G2oj3_tQuXmM78QQVje_WdkYDyqbUONJMaUMovfDrPKTs8mbSktvgoptdJxHwtSjck_0xs3T-aNCxFsXQ` })
    .then((currentToken) => {
      if (currentToken) {
        // token = currentToken;
       // currentToken = token;
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
}