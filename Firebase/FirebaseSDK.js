
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2Z7mQ3JnsR-YVapLOieW591134fcPAjU",
  authDomain: "orebifinal.firebaseapp.com",
  projectId: "orebifinal",
  storageBucket: "orebifinal.firebasestorage.app",
  messagingSenderId: "651923614475",
  appId: "1:651923614475:web:d5a03a4f68fb38eda8500e"
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);
export default fireapp;
