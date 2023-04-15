// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBet-_DiY9gCkFcYKJFJEmK19Gtjvyaf5Y",
  authDomain: "ababon-babanto-cs1.firebaseapp.com",
  projectId: "ababon-babanto-cs1",
  storageBucket: "ababon-babanto-cs1.appspot.com",
  messagingSenderId: "902696087277",
  appId: "1:902696087277:web:1c862140b65b223fabe6e4",
  measurementId: "G-23607BRBTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)