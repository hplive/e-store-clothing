import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =   {
    apiKey: "AIzaSyBwfNbfR9u_saiK3cYeYsjGfl5yV-bAZwQ",
    authDomain: "e-store-react-fc1b5.firebaseapp.com",
    projectId: "e-store-react-fc1b5",
    storageBucket: "e-store-react-fc1b5.appspot.com",
    messagingSenderId: "596097340926",
    appId: "1:596097340926:web:abe33fb26e12b6675cdcaf",
    measurementId: "G-KC1NW6VB59"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;

