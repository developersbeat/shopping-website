import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfBjnrZWT_PfJgr2E1JfYGqZaekVO7rfY",
    authDomain: "crown-clothing-devbeats.firebaseapp.com",
    databaseURL: "https://crown-clothing-devbeats.firebaseio.com",
    projectId: "crown-clothing-devbeats",
    storageBucket: "crown-clothing-devbeats.appspot.com",
    messagingSenderId: "791777460591",
    appId: "1:791777460591:web:93522484601db6984ca89a",
    measurementId: "G-Z99C7FT1SR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;