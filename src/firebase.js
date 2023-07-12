// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrR4JycodkpqxO14Ufq00q_rhMQrG0eFA",
  authDomain: "chat-89f7e.firebaseapp.com",
  projectId: "chat-89f7e",
  storageBucket: "chat-89f7e.appspot.com",
  messagingSenderId: "201956075504",
  appId: "1:201956075504:web:7fe43646aaf8f08a7c1f35"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const storage = getStorage();
export const db = getFirestore();
