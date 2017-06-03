// Initialize Firebase

import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBNyZzqe0QF9J8ZMmy0lrtMCqEKt1hZvr8",
  authDomain: "looca.firebaseapp.com",
  databaseURL: "https://looca.firebaseio.com",
  projectId: "firebase-looca",
  storageBucket: "firebase-looca.appspot.com",
  messagingSenderId: "851736161056"
};
firebase.initializeApp(config);

export default firebase;
