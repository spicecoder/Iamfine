import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const db = getFirestore();

export async function readTokenFromFirestore(email, ) {
    //try {
        const docRef = doc(db, 'user_token', email); // Using email as the document ID
        
        const docSnap = await getDoc(docRef)
         console.log("Token saved to Firestore successfully");
    // } catch (error) {
    //     console.error("Error saving token to Firestore:", error);
    // }

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  return null
}

}
export async function  displayData(props)  {
  const docData = await readTokenFromFirestore( props.email);
  const resultElement = document.getElementById('result-box');
  if (docData) {
    resultElement.textContent = 'Current Data: ' + docData;
  } else {
    resultElement.textContent = 'No current data available. Please  verify.';
  }
};
export default readTokenFromFirestore
