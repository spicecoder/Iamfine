import {React,useState} from "react";
import MoneyDisplay from "./MoneyDisplay";
import MoneyUpdate from "./MoneyUpdate";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import { useEffect} from 'react'
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import {Navigate} from 'react-router-dom'
import {ColorProvider} from './colorFlash/ColorContext'
import {Square, Circle} from './colorFlash/SquareCircle'
import ACircle from './colorFlash/ACircle'
<<<<<<< HEAD
import { fetchTokenFromFirestore } from './getTokenFromFirebase'
=======
>>>>>>> main
//import AuthContext from "./AuthContext";
//
//import { useNavigate, Navigate } from "react-router-dom";
const App = () => {
  const API_BASE_URL = "http://localhost:5020";
  //const { user } = useContext(AuthContext);
  const [currentMoney,setCurrentMoney]=useState(0);
  // if (!user) {
  //       return <Navigate replace to="/login" />;
  //     }
 
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "360px",
        height: "640px",
        margin: "50px auto",
        borderRadius: "20px",
        border: "2px solid blue",
        overflow: "hidden",
      }}
    >
     <ColorProvider>
       <ACircle/>
      <Square />
      <Circle />
    </ColorProvider>  
    <>
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
        </Routes>  
      </AuthProvider>
  </Router>
  
  </>
  <>
  {currentUser?.emailVerified ? (
    <>
      <MoneyDisplay apiUrl={`${API_BASE_URL}`} currentMoney={currentMoney} />
      <MoneyUpdate apiUrl={`${API_BASE_URL}`} currentMoney={currentMoney} setCurrentMoney={setCurrentMoney} />
    </>
  ) : (
    <p>You can connect to your wallet.</p>
  )}
</>
<<<<<<< HEAD
  
=======

>>>>>>> main
    </div>
  
  );
};

export default App;
//https://css-tricks.com/user-registration-authentication-firebase-react/