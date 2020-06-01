import * as firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqB6OrPg-dRLH9TIEMNIjR8S_EvgDDMsw",
  authDomain: "chatapp-b1aff.firebaseapp.com",
  databaseURL: "https://chatapp-b1aff.firebaseio.com",
  projectId: "chatapp-b1aff",
  storageBucket: "chatapp-b1aff.appspot.com",
  messagingSenderId: "109696326222",
  appId: "1:109696326222:web:a461f8d23b885046ea011f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
