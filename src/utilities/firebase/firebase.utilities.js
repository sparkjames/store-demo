import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-rvIhFe_U0nakahNWxBalTOCjRKafSH4",
  authDomain: "react-clothing-store-7985b.firebaseapp.com",
  projectId: "react-clothing-store-7985b",
  storageBucket: "react-clothing-store-7985b.appspot.com",
  messagingSenderId: "181284933741",
  appId: "1:181284933741:web:448f8f66bcb150b279af64"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider,);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if( !userAuth ){
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if( !userSnapshot.exists() ){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating user: ', error );
    }

  }

  return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ){
    return;
  }

  return await createUserWithEmailAndPassword( auth, email, password );
};