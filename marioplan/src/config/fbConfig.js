import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCz7Sq9m8gZcipb6JmUHXvHnfSGhtdC-rg",
    authDomain: "net-ninja-marioplan-6c67d.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-6c67d.firebaseio.com",
    projectId: "net-ninja-marioplan-6c67d",
    storageBucket: "net-ninja-marioplan-6c67d.appspot.com",
    messagingSenderId: "595430312769",
    appId: "1:595430312769:web:3b4c008fcdd337dcf86fc0",
    measurementId: "G-8X2DBD6PJH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase