import React, { useEffect, useState } from 'react';
import {getToken, messaging,requestForToken } from './firebase';

function App() {
  const [notificationPermission, setNotificationPermission] = useState(Notification.permission);

  const handlePermissionRequest = async () => {
    try {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
      if (permission === 'granted') {
        //const token = await getToken(messaging);
        const token = requestForToken();
        console.log('FCM Token:', token);
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  useEffect(() => {
    setNotificationPermission(Notification.permission);
  }, []);

  return (
    <div>
      <h1>FCM Notification Tester</h1>
      <button onClick={handlePermissionRequest}>
        Request Notification Permission
      </button>
    </div>
  );
}

export default App;
