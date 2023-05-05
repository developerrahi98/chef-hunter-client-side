// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxtXvxMePk6DWweaY8oESTsqBhgzTKRf8",
  authDomain: "chefs-cusine.firebaseapp.com",
  projectId: "chefs-cusine",
  storageBucket: "chefs-cusine.appspot.com",
  messagingSenderId: "872386337041",
  appId: "1:872386337041:web:97c02c5952e8878a9914b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;