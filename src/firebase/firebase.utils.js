import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAmQPvUVDt1TG6HNo-7F4kh3w1WCtK1hg0",
  authDomain: "store-28576.firebaseapp.com",
  projectId: "store-28576",
  storageBucket: "store-28576.appspot.com",
  messagingSenderId: "268885592226",
  appId: "1:268885592226:web:97bf381d9dc6d75ae76ffb",
  measurementId: "G-8WEK3ERN3E"
};

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...aditionalData
      })

    }catch(error){
      console.log('error creating user',error.message)
    }
  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

