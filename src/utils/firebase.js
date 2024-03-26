// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDMf9Dmvby0iiu21fecj1rNwQoZROvHg",
  authDomain: "netflixgpt-4cf9e.firebaseapp.com",
  projectId: "netflixgpt-4cf9e",
  storageBucket: "netflixgpt-4cf9e.appspot.com",
  messagingSenderId: "201282553913",
  appId: "1:201282553913:web:10dd81c6b34e04709d65e8",
  measurementId: "G-RNTFC9ZQXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();