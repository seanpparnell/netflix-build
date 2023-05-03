// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



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

export { auth };
export default db;



// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = app.firestore()


// export { auth };
// export default db;
