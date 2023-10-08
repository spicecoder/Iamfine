import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import { saveTokenToFirestore } from './saveTokenToFirebase';
import {displayData} from './getTokenFromFirebase'
//import {BrowserRouter as  Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
//import { Router } from 'express';
import {Agent , userid} from './Agent';
import {displayCurrentToken} from "./firebase"

function Profile() {
  const { currentUser } = useAuthValue();
  const [token, setToken] = useState(null);
   const [item, setItem] = useState('');
   const [showItem, setShowItem] = useState(false);

  const handleOnClick = () => {
    //nabamitabina@yahoo.com
    const newItem = displayData({ email : userid});
    setItem(newItem);
    setShowItem(true);
  };
  
  function formatToken(token) {
    if (!token) return null;
    return token.length > 20 ? `${token.substring(0, 20)}...` : token;
  }
  useEffect(() => {
    const fetchToken = async () => {
      if (currentUser) {
        const fetchedToken = await currentUser.getIdToken();
        
        saveTokenToFirestore(currentUser.email, fetchedToken);
        setToken(fetchedToken);
      }
      
    };
    

    fetchToken();
  }, [currentUser]);

  return (
    <div className='center'>
      <div className='profile'>
        <h1>Profile</h1>
        <p><strong>Email: </strong>{currentUser?.email}</p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <p> 
        <Agent />
        <div>
     
      <button onClick={displayCurrentToken}>Display Token</button>
      <div id="result-box"></div>
    </div> 
    FB AUTH token </p>
          <div>
           
     
     <button onClick={handleOnClick}>Display Data</button>
     <div id="result-box"></div>
   </div>
          <p>
          {formatToken(token)}
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  );
}


export default Profile
