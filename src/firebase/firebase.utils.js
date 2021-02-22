import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyDhyxfA7_HOAYC9294to5OSgMXkP36hiP4",
  authDomain: "crwn-db-c270e.firebaseapp.com",
  databaseURL: "https://crwn-db-c270e-default-rtdb.firebaseio.com",
  projectId: "crwn-db-c270e",
  storageBucket: "crwn-db-c270e.appspot.com",
  messagingSenderId: "519569800556",
  appId: "1:519569800556:web:b0468354185cadd4268749",
  measurementId: "G-JM2613QQCB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
