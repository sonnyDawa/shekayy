// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ1_3h2kRRWIQ9Cur68Hfz9xLjzu53ijs",
  authDomain: "logo-2-c33ae.firebaseapp.com",
  projectId: "logo-2-c33ae",
  storageBucket: "logo-2-c33ae.appspot.com",
  messagingSenderId: "281574079734",
  appId: "1:281574079734:web:39233a92010503a4e200d7"
};



// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()
export const auth = getAuth(app)












/* C Program to find Sum of each row and column of a Matrix */


