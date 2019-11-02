import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBWey54E6ml9qi3tLalq5QOzmGkkUX2r28",
    authDomain: "revents-257605.firebaseapp.com",
    databaseURL: "https://revents-257605.firebaseio.com",
    projectId: "revents-257605",
    storageBucket: "revents-257605.appspot.com",
    messagingSenderId: "736644903411",
    appId: "1:736644903411:web:c4196eeeb4c826f4e92286",
    measurementId: "G-2K5ECQ6MMX"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore();

  export default firebase;