import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import * as firebaseAuth from 'firebase/auth';
      

// Firebase Configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);