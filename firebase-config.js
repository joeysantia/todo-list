import { initializeApp } from 'firebase/app'
import DOM from './src/js/dom';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const config = { 
  apiKey: "AIzaSyCWj8MtkUj4e3M2WypUpHX44Zs4mzpHtVY",
  authDomain: "toodoo-8880b.firebaseapp.com",
  projectId: "toodoo-8880b",
  storageBucket: "toodoo-8880b.appspot.com",
  messagingSenderId: "1080679616577",
  appId: "1:1080679616577:web:7ee08b35ea5e248f0436c0",
  measurementId: "G-HVZ9TCT7EL"
}

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

