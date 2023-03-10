// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvCgRLn05yVwkCXVfBHyhi9QLwpdzvULQ",
  authDomain: "react-cursos-edcbc.firebaseapp.com",
  projectId: "react-cursos-edcbc",
  storageBucket: "react-cursos-edcbc.appspot.com",
  messagingSenderId: "887182563247",
  appId: "1:887182563247:web:924c565ccf4baa84eb815a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
