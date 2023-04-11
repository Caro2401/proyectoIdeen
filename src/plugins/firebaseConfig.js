import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDEMf_gEfLErvhoDpgx7hlnjxhqqK1UefQ",
    authDomain: "web-apps-101-60343.firebaseapp.com",
    projectId: "web-apps-101-60343",
    storageBucket: "web-apps-101-60343.appspot.com",
    messagingSenderId: "623269292807",
    appId: "1:623269292807:web:92544465784fe2b754f3a2",
    measurementId: "G-C2B9069MTQ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db= firebase.firestore();