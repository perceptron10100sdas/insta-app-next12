
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5QxKW-jn88IguITNcpVGdiu66fmWOjaA",
  authDomain: "insta-f9f27.firebaseapp.com",
  projectId: "insta-f9f27",
  storageBucket: "insta-f9f27.appspot.com",
  messagingSenderId: "534350783129",
  appId: "1:534350783129:web:27d9f1a8dceb7c033c0e08"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();


export { app, db, storage };