// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyhnFwun2iwkTy1kx1wxbikn8W2_fR_vE",
  authDomain: "college-1e234.firebaseapp.com",
  projectId: "college-1e234",
  storageBucket: "college-1e234.firebasestorage.app",
  messagingSenderId: "289357587092",
  appId: "1:289357587092:web:bdab7c6d8d6eaac3a64a81",
  measurementId: "G-RZ9C71TRWT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);