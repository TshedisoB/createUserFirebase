import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSn2SfbF0TUNxeb41N6eFbtgA81PpXr9E",
  authDomain: "createuser-61694.firebaseapp.com",
  projectId: "createuser-61694",
  storageBucket: "createuser-61694.appspot.com",
  messagingSenderId: "204082030380",
  appId: "1:204082030380:web:02e403ea9c93568de6ae89",
  measurementId: "G-RMGR4LR8G6",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
