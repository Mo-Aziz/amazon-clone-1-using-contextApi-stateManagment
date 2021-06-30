import firebase from "firebase";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEoWYdTHzyzVBUCYB8WO0bG0dokEHk6W8",
  authDomain: "clone-b56b2.firebaseapp.com",
  projectId: "clone-b56b2",
  storageBucket: "clone-b56b2.appspot.com",
  messagingSenderId: "212628865011",
  appId: "1:212628865011:web:b61e1251bf36433977dc86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
