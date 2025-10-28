// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABWddYGFzbKtaUmVes8JJEDOH5QMy1hLY",
  authDomain: "my-conceptual-session9.firebaseapp.com",
  projectId: "my-conceptual-session9",
  storageBucket: "my-conceptual-session9.firebasestorage.app",
  messagingSenderId: "512723641151",
  appId: "1:512723641151:web:08df2a4daaf2ecd234698a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);