// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAap7LLhNi9Kr8V4Td7KRrJQuBV40RHGXw",
  authDomain: "chef-recipe-hunter-clien-65c14.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-65c14",
  storageBucket: "chef-recipe-hunter-clien-65c14.appspot.com",
  messagingSenderId: "626568526482",
  appId: "1:626568526482:web:392e076724baba5337044b",
  measurementId: "G-Y24JJ2D0F9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;