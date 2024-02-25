// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmsGlfBkgGUCUzuPuDYqLbI9lxRqvkudI",
  authDomain: "myportfolio-daef2.firebaseapp.com",
  projectId: "myportfolio-daef2",
  storageBucket: "myportfolio-daef2.appspot.com",
  messagingSenderId: "709658536632",
  appId: "1:709658536632:web:766e8845fbcf8d51e5224d",
  measurementId: "G-X0NHTMHQ8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}