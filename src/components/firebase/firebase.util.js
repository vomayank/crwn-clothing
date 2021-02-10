import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDhyxfA7_HOAYC9294to5OSgMXkP36hiP4",
  authDomain: "crwn-db-c270e.firebaseapp.com",
  projectId: "crwn-db-c270e",
  storageBucket: "crwn-db-c270e.appspot.com",
  messagingSenderId: "519569800556",
  appId: "1:519569800556:web:b0468354185cadd4268749",
  measurementId: "G-JM2613QQCB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
