// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FIREBASE_API } from '../config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase

export const firebaseApp = initializeApp(FIREBASE_API);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);