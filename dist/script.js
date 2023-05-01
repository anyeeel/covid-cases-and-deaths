// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

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
const auth = getAuth(app);
console.log(app);
const db = getFirestore(app);

// Get a reference to the form element
const form = document.getElementById("form");

// Add an event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const country = document.getElementById("country").value;
  const cases = document.getElementById("Cases").value;
  const population = document.getElementById("Population").value;
  const deaths = document.getElementById("Deaths").value;
  const active = document.getElementById("Active").value;
  const recovered = document.getElementById("Recovered").value;
  const tests = document.getElementById("Test").value;

  // Create a new object with the form data
  const newData = {
    country: country,
    cases: cases,
    population: population,
    deaths: deaths,
    active: active,
    recovered: recovered,
    tests: tests,
  };

  // Save the new data to the Firestore database
  addDoc(collection(db, "covid"), newData);

  // Reset the form
  form.reset();

  // Hide the popup form
  const popup = document.getElementById("popup");
  popup.style.display = "none";
});
