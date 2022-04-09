// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//cada produto do firebase deve ser importado separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7HiCsS5tZXW3oSVa8Ei_ICwxN4Wmby5U",
  authDomain: "crudfirestorenavigation.firebaseapp.com",
  projectId: "crudfirestorenavigation",
  storageBucket: "crudfirestorenavigation.appspot.com",
  messagingSenderId: "518830825086",
  appId: "1:518830825086:web:b2a8912d226df4d8f0c22f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };