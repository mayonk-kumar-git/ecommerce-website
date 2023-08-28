import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx3l5bD0ySeXFNfljioOK9Xy1SEtWBvYE",
  authDomain: "totalitycorp-challenge.firebaseapp.com",
  projectId: "totalitycorp-challenge",
  storageBucket: "totalitycorp-challenge.appspot.com",
  messagingSenderId: "775286282516",
  appId: "1:775286282516:web:3c18c27a4faaffdcd94a01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
