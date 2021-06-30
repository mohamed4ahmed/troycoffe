import firebase from 'firebase/app';
import 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyDF8SnENslEmVeSIBVapeB3JsPI9_0vxNM",
    authDomain: "troy-22bf4.firebaseapp.com",
    projectId: "troy-22bf4",
    storageBucket: "troy-22bf4.appspot.com",
    messagingSenderId: "508233397123",
    appId: "1:508233397123:web:4180d6a161a329c73d3cb6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export  const db =  firebase.firestore();
  


