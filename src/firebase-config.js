// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMSplo24fOPBxdgpKcE6Bfj5XS2wBCvnk",
  authDomain: "santre-18e2b.firebaseapp.com",
  projectId: "santre-18e2b",
  storageBucket: "santre-18e2b.firebasestorage.app",
  messagingSenderId: "336712470683",
  appId: "1:336712470683:web:9b45c96b970ef5c71bb63e",
  measurementId: "G-BY9GKEKRDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 