import { initializeApp } from "https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/8.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbrZL9449cMCUn4pR6n9lX1AXVICbKYw4",
  authDomain: "mediweb-cf259.firebaseapp.com",
  projectId: "mediweb-cf259",
  storageBucket: "mediweb-cf259.appspot.com",
  messagingSenderId: "541262822403",
  appId: "1:541262822403:web:cfebc7df6c145ee160a236",
  measurementId: "G-VPPJ6FHRHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log('hi');
    // ...
  })
  .catch((error) => {
    console.log('failed');
  });