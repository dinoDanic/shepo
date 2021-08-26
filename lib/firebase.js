import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6o2pIBLMG5eX_3NgB08RZUvDjTjgjuvw",
  authDomain: "shepo-tm.firebaseapp.com",
  projectId: "shepo-tm",
  storageBucket: "shepo-tm.appspot.com",
  messagingSenderId: "911562555324",
  appId: "1:911562555324:web:39c8e126899517020f35b9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const singInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
