import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebase"
import { userid} from './Agent';


//const docRef = doc(db, "cities", "SF");
//const docSnap = await getDoc(docRef);
let userTokenn ;
//let docData = null;

export async function fetchTokenFromFirestore(  email) {
    const docRef = doc(db,"user_token",  email);
    try {
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const userToken = userData.fcmtoken; // Assuming 'fcmtoken' is the field name in your Firestore document
  
        // You can store 'userToken' in a variable for further use
        // For example, you can log it or return it
        console.log("ak this is uuuuu User's FCM Token:", userToken);
  
        // Return the FCM token
        return userToken;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }
 
  export async function displayData(props) {
  try {
    const docData = await fetchTokenFromFirestore(props.email);
    console.log("Here is the data I'm searching for:", docData);
    userTokenn = docData; // Assign the value to the userToken variable

    const resultElement = document.getElementById('result-box');

    if (docData) {
      resultElement.textContent = 'Current Data: ' + docData;
      return docData
    } else {
      resultElement.textContent = 'No current data available. Please verify.';
    }
  } catch (error) {
    console.error('Error fetching and displaying data:', error);
  }
}


 export {userTokenn}