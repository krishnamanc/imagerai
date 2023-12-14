// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA4CeylWHoN0DVY7fGylIHTVConhYoVqg",
  authDomain: "imagerai.firebaseapp.com",
  projectId: "imagerai",
  storageBucket: "imagerai.appspot.com",
  messagingSenderId: "138333170064",
  appId: "1:138333170064:web:03a0a356af629e56162b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)