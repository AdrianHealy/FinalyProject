// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBHVzsY1M56Ttq8ybpuNnZ8o0mVHJ4Fk",
  authDomain: "qwerty-75e22.firebaseapp.com",
  projectId: "qwerty-75e22",
  storageBucket: "qwerty-75e22.appspot.com",
  messagingSenderId: "1020838352063",
  appId: "1:1020838352063:web:4b33c86af80f3cc669220a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
