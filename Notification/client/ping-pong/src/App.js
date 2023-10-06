import React, { useState, useEffect } from "react";
import { onMessageListener } from "./firebase";
import Notification from "./notification"; // Assuming this is the correct import
import { displayCurrentToken } from "./firebase";
import OnlyToken from './OnlyToken';
//const API_BASE_URL = "http://localhost:5020";

const App = () => {
 
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  // const [item, setItem] = useState('');
  // const [showItem, setShowItem] = useState(false);
  // //const token = "";
  const [userInput, setUserInput] = useState("");
  const [userInput1, setUserInput1] = useState("");

 
  const showNotification = (title, body) => {
    setNotification({ title, body });
    setShow(true);
  };
  // const handleClick = () => {
  //   const newItem = displayCurrentToken;
  //   setItem(newItem);
  //   setShowItem(true);
  // };

  const recieve = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    //console.log("User input:", userInput); 
    fetch("http://localhost:5020/recieve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    })
   
  };

  const recieveToken = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    //console.log("User input:", userInput); 
    fetch("http://localhost:5020/recieveToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput1 }),
    })
   
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = await onMessageListener();
        showNotification(
          payload?.notification?.title,
          payload?.notification?.body
        );
      } catch (err) {
        console.log('Failed: ', err);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className="Notification-App">
       <div>
    
      <button onClick={displayCurrentToken}>Display Token</button>
      <div id="result-box"></div>
    </div>
      <form onSubmit={recieve} name="token_receiving">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Update user input state
          required
          placeholder="Enter Your message"
        />
        <button type="submit">SEND MSG TO NABAKUMAR</button>
      </form>
      <form onSubmit={recieveToken} name="token_receiving">
        <input
          type="text"
          value={userInput1}
          onChange={(e) => setUserInput1(e.target.value)} // Update user input state
          required
          placeholder="Enter Token"
        />
        <button type="submit">SEND FCM TOKEN </button>
      </form>
      
      {show ? (
        <Notification title={notification.title} body={notification.body} />
      ) : (
        <></>
      )}
      {/* <Notification /> */}
     <p> Only Token -No Condition</p>
      <OnlyToken/>
      
    </div>
  );
};

export default App;
