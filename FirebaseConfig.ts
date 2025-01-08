// FirebaseConfig.ts

// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDNHjHu59nHqOrvqlViLO7tRxtSZLFJ8",
  authDomain: "mobila-972b2.firebaseapp.com",
  projectId: "mobila-972b2",
  storageBucket: "mobila-972b2.firebasestorage.app",
  messagingSenderId: "1095463190787",
  appId: "1:1095463190787:web:37516eb007d86e10dfa936"
};

// Initialize Firebase
const FIREBASE_APP: FirebaseApp = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
