import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1Oc5zVxhPV8i-_2mdQhxPENQ45dURGAw",
  authDomain: "facebook-clone-f338d.firebaseapp.com",
  databaseURL: "https://facebook-clone-f338d.firebaseio.com",
  projectId: "facebook-clone-f338d",
  storageBucket: "facebook-clone-f338d.appspot.com",
  messagingSenderId: "615516475638",
  appId: "1:615516475638:web:adf3c12ac9c285f0e99cd7",
  measurementId: "G-XHFP8Y8341"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;