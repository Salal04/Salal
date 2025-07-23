// Import the functions you need from the SDKs you need
import { getAuth, signInAnonymously } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Wzh31GM85tU7Z9dcZ-jttw72CsBFxtM",
  authDomain: "portfolio-ba973.firebaseapp.com",
  projectId: "portfolio-ba973",
  storageBucket: "portfolio-ba973.firebasestorage.app",
  messagingSenderId: "509998930077",
  appId: "1:509998930077:web:6818972e01bf931a5a5c74",
  measurementId: "G-7D98V4XMTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth };