// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Op9arQwOpIdY81E_UaG64pg8ZhIxx68",
  authDomain: "stdattendence-9f402.firebaseapp.com",
  projectId: "stdattendence-9f402",
  storageBucket: "stdattendence-9f402.appspot.com",
  messagingSenderId: "998126084788",
  appId: "1:998126084788:web:c74f381024c63e34e22de1",
  measurementId: "G-531D9LKFYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
export const dbStorage=getStorage(app)
