import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
const { FIREBASE_API_KEY } = process.env;
var config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "portfolio-235022.firebaseapp.com",
  databaseURL: "https://portfolio-235022.firebaseio.com",
  projectId: "portfolio-235022",
  storageBucket: "portfolio-235022.appspot.com",
  messagingSenderId: "478711629202"
};

firebase.initializeApp(config);
firebase.firestore();

var storage = firebase.storage();

export { storage, firebase as default };

{
  /* <script src="https://www.gstatic.com/firebasejs/5.9.0/firebase.js"></script> */
}
