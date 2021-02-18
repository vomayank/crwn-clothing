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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userref = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userref.get();
  if(!snapshot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userref.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error) {
      console.log(error);
    }
  }

  return userref;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
