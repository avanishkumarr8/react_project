import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBkEsLyh5MiheAIPO_JpZHZ5H00RQ5z5qQ",
  authDomain: "otp-app-demo-43189.firebaseapp.com",
  projectId: "otp-app-demo-43189",
  storageBucket: "otp-app-demo-43189.appspot.com",
  messagingSenderId: "754004363842",
  appId: "1:754004363842:web:c683491add605fc2edfbdb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
