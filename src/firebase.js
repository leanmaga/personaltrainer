// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZvF0bihe4-dscre0Ss58oz08r4YWOcDk",
  authDomain: "personaltrainer-28b01.firebaseapp.com",
  projectId: "personaltrainer-28b01",
  storageBucket: "personaltrainer-28b01.appspot.com",
  messagingSenderId: "479352953909",
  appId: "1:479352953909:web:2a1fe5e7085aca8ef9657c",
  measurementId: "G-K2KKHXRHSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);