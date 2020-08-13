import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAmChsJmEIwI-AyXJgv3ynfWh_zAByAtWc",
  authDomain: "vue-firebase-f8f80.firebaseapp.com",
  databaseURL: "https://vue-firebase-f8f80.firebaseio.com",
  projectId: "vue-firebase-f8f80",
  storageBucket: "vue-firebase-f8f80.appspot.com",
  messagingSenderId: "900060334930",
  appId: "1:900060334930:web:24bb922d2485832c35488b"
};
// Initialize Firebase

let app = firebase.initializeApp(firebaseConfig);
let db = app.firestore();
let postRef = db.collection("post");

export { postRef };
