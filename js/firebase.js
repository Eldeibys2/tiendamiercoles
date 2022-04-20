// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjaVBbO1eLlRRDwR7aLiala4CxFKnpW18",
  authDomain: "deibytiendacesde.firebaseapp.com",
  projectId: "deibytiendacesde",
  storageBucket: "deibytiendacesde.appspot.com",
  messagingSenderId: "226401688223",
  appId: "1:226401688223:web:62b81bbb5b4d915f2260aa",
  measurementId: "G-YNG5B4S0VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);