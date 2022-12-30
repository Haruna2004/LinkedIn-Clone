// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAvG3N9rkDtrgS6MIvQhcoV21UNlAGO0eA",
    authDomain: "linkedin-clone-hf.firebaseapp.com",
    projectId: "linkedin-clone-hf",
    storageBucket: "linkedin-clone-hf.appspot.com",
    messagingSenderId: "405952153720",
    appId: "1:405952153720:web:54899a7d3500d5f7a7458d",
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db,auth } 