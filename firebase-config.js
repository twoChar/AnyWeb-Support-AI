import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpzyoURaV8OU1g1sntrn4JIruw6O-8z_s",
  authDomain: "supportly-8ace8.firebaseapp.com",
  projectId: "supportly-8ace8",
  storageBucket: "supportly-8ace8.appspot.com",
  messagingSenderId: "772073021441",
  appId: "1:772073021441:web:7c2ea62d0b0e85af5b2000",
  measurementId: "G-LXZ4NJLHHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };