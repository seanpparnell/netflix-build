// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDGwpoXBvhaeStL_NJ40Bz-3EVfvLC_g4w",
  authDomain: "netflix-build-9be93.firebaseapp.com",
  projectId: "netflix-build-9be93",
  storageBucket: "netflix-build-9be93.appspot.com",
  messagingSenderId: "881845953005",
  appId: "1:881845953005:web:5f7507a5288c0197ca47e4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// export const onAuthStateChangedListener = (callback) => {
//   return onAuthStateChanged(auth, callback);
// };

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (userAuth) => {
//         unsubscribe();
//         resolve(userAuth);
//       },
//       reject
//     );
//   });
// };


export { auth };
export default db;



// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = app.firestore()


// export { auth };
// export default db;
