import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'

import { useState, useEffect } from 'react';


function Profile() {
  const { currentUser } = useAuthValue();
  const [token, setToken] = useState(null);
  function formatToken(token) {
    if (!token) return null;
    return token.length > 20 ? `${token.substring(0, 20)}...` : token;
  }
  useEffect(() => {
    const fetchToken = async () => {
      if (currentUser) {
        const fetchedToken = await currentUser.getIdToken();
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
          FB AUTH token </p>
          <p>
          {formatToken(token)}
        </p>
        <span onClick={() => signOut(auth)}>Sign Out</span>
      </div>
    </div>
  );
}


export default Profile
