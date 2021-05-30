import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyANYrFpBBi_5_Tdb4x7P6HTblMl1hr-soQ",
    authDomain: "noboni-internal-chat.firebaseapp.com",
    projectId: "noboni-internal-chat",
    storageBucket: "noboni-internal-chat.appspot.com",
    messagingSenderId: "591955763534",
    appId: "1:591955763534:web:35a6e2fca837c279d8be1f",
    measurementId: "G-RE4H474F1L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;