importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDkq3uQxKiGSPXERrytKSfSlLhu0A1Poxc",
  authDomain: "khlogin-01.firebaseapp.com",
  databaseURL: "https://khlogin-01.firebaseio.com",
  projectId: "khlogin-01",
  storageBucket: "khlogin-01.appspot.com",
  messagingSenderId: "405781304253",
  appId: "1:405781304253:web:76a22701b292cd875978d4",
  measurementId: "G-3VPBF38BJZ"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "KITCHEN HAMARA!!!!";
  const notificationOptions = {
    body: "HEY Nabakumar your food is ready this KITCHEN HAMARA from background.",
    icon: "/firebase-logo.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    messaging.useServiceWorker(registration);  
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}
