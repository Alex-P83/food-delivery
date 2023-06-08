// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMIw2L9INeoLJSYOG_LGVn7XU4D_uDYxY",
  authDomain: "food-delivery-81235.firebaseapp.com",
  projectId: "food-delivery-81235",
  storageBucket: "food-delivery-81235.appspot.com",
  messagingSenderId: "395914445623",
  appId: "1:395914445623:web:49c3726e18504ed1ad90b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

