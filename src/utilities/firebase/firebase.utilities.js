import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection( db, collectionKey );
  const batch = writeBatch( db );

  objectsToAdd.forEach(element => {
    const docRef = doc(collectionRef, element.title.toLowerCase() );
    batch.set( docRef, element );
  });

  await batch.commit();
  console.log('done with batch.');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce(
    (accumulator, docSnapshot) => {
      const {title, items} = docSnapshot.data();
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    },
    {}
  );

  return categoryMap;

};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if( !userAuth ){
    return;
  }

  const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if( !email || !password ){
    return;
  }

  return await signInWithEmailAndPassword( auth, email, password );
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  if( !callback ){
    return;
  }
  return onAuthStateChanged( auth, callback );
};