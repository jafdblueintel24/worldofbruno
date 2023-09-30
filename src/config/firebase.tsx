// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsZoUXDaya0BjEQ-TxbXKod7LulX7GI9I",
  authDomain: "worldofbruno-f9a79.firebaseapp.com",
  projectId: "worldofbruno-f9a79",
  storageBucket: "worldofbruno-f9a79.appspot.com",
  messagingSenderId: "134518597369",
  appId: "1:134518597369:web:60fd4aab0a939faa7e2428",
  measurementId: "G-3JD8G5N4LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
