// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {getAuth, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjRI6iJKLbOAT2tRIxzDTI5ifEGqvYE7U",
  authDomain: "react-2025-4104d.firebaseapp.com",
  projectId: "react-2025-4104d",
  storageBucket: "react-2025-4104d.firebasestorage.app",
  messagingSenderId: "339766638566",
  appId: "1:339766638566:web:7909668069f7d59b180827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();