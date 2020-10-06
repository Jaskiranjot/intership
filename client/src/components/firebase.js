import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// this is okay to expose because these are all client side anyway - there is NO way to hide these from the user
// security must be done on the firebase side
var firebaseConfig = {
  apiKey: "AIzaSyCmKav_V4NXBCy6WxppluFHV8Sj-w0OP_A",
  authDomain: "send-it-on.firebaseapp.com",
  databaseURL: "https://send-it-on.firebaseio.com",
  projectId: "send-it-on",
  storageBucket: "send-it-on.appspot.com",
  messagingSenderId: "306099219422",
  appId: "1:306099219422:web:57c5c8a6ac525991898b4f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const st = firebase.storage();