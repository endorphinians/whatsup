// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2_22t4VIZ3v9-BNrS9wyvulQ0_gscDU",
  authDomain: "whatsup-865be.firebaseapp.com",
  projectId: "whatsup-865be",
  storageBucket: "whatsup-865be.appspot.com",
  messagingSenderId: "977043360053",
  appId: "1:977043360053:web:e606f1639b05124be5647c",
  measurementId: "G-RBC1WMYJBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
