import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXbvOjSQgLY9Z1016Ws_eKFZrUfUMkwqo",
  authDomain: "real-chat-app-b79ea.firebaseapp.com",
  projectId: "real-chat-app-b79ea",
  storageBucket: "real-chat-app-b79ea.appspot.com",
  messagingSenderId: "125550149927",
  appId: "1:125550149927:web:71093ab7daa469fe33a902"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}