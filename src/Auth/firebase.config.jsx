// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh3fyoEhVbkt2k2MP8bPexXj-92LOXufA",
  authDomain: "fitness-fitnex.firebaseapp.com",
  projectId: "fitness-fitnex",
  storageBucket: "fitness-fitnex.appspot.com",
  messagingSenderId: "268438570213",
  appId: "1:268438570213:web:35ff8a397a1e2462a3c00c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
