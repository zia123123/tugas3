const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAz2KqmedRaYo2ZVjoh4z2efvtCPDN-GeU",
    authDomain: "sera-8dd74.firebaseapp.com",
    projectId: "sera-8dd74",
    storageBucket: "sera-8dd74.appspot.com",
    messagingSenderId: "512507369964",
    appId: "1:512507369964:web:8ed3b53cef0419523e48c9",
    measurementId: "G-KMWCJV75LE"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Todo = db.collection("Todo");
module.exports = Todo;