//import * as firebase from "firebase/app"
import firebase from 'firebase'
import "firebase/storage"
import "firebase/firestore"




// Your web app's Firebase configuration
//var firebaseConfig = {
  export const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASEKEY,
    authDomain: "electro-city-71615.firebaseapp.com",
    projectId: "electro-city-71615",
    storageBucket: "electro-city-71615.appspot.com",
    messagingSenderId: "736936725975",
    appId: "1:736936725975:web:25e918e1ad0609bf6e0f92"
  });
  // Initialize Firebase
 // firebase.initializeApp(firebaseConfig);

  //const projectStorage = firebase.storage();
 // const projectFirestore = firebase.firestore();

  //export const app = [ projectStorage, projectFirestore ]