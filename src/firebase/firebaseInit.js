import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXMx4ahD5dnAgjVr2wEd57oDfpAqJYXGY",
  authDomain: "invoice-app-26d7c.firebaseapp.com",
  projectId: "invoice-app-26d7c",
  storageBucket: "invoice-app-26d7c.appspot.com",
  messagingSenderId: "595814977484",
  appId: "1:595814977484:web:73964a97e0ac1591701769"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();