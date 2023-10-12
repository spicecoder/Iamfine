import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

async function saveTokenToFirestore(email, fcmToken) {
    try {
        const docRef = doc(db, 'moneyNotice', email); // Using email as the document ID
        await setDoc(docRef, {
            Object: email,
            Intention: "Send Money Notice",
            Design: fcmToken
        }, { merge: true }); // merge: true ensures we update the doc if it exists, or create if it doesn't

        console.log("Token saved to Firestore successfully");
    } catch (error) {
        console.error("Error saving token to Firestore:", error);
    }
}
export default saveTokenToFirestore