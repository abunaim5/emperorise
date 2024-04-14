// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgFvdp6IoxNHFA6blFQ6XpAW-8rUag7lM",
  authDomain: "emperorisee.firebaseapp.com",
  projectId: "emperorisee",
  storageBucket: "emperorisee.appspot.com",
  messagingSenderId: "1086439049633",
  appId: "1:1086439049633:web:eb77d3796b2eaea1ff23e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;