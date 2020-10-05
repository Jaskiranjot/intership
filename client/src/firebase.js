import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/db';
import 'firebase/firestore';

// this is okay to expose because these are all client side anyway - there is NO way to hide these from the user
// security must be done on the firebase side
const firebaseConfig = {
  apiKey: 'AIzaSyAuigC_Z7OtT7hUCJPoax_-30B01vx2570',
  authDomain: 'send-it-on.firebaseapp.com',
  databaseURL: 'https://send-it-on.firebaseio.com',
  projectId: 'send-it-on',
  storageBucket: 'send-it-on.appspot.com',
  messagingSenderId: '306099219422',
  appId: '1:306099219422:web:57c5c8a6ac525991898b4f'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

