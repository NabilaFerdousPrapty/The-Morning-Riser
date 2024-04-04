// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb14sAB10hEtFecG_BJ07zgP-2Q8VnLjU",
  authDomain: "the-morning-riser.firebaseapp.com",
  projectId: "the-morning-riser",
  storageBucket: "the-morning-riser.appspot.com",
  messagingSenderId: "753592086076",
  appId: "1:753592086076:web:cc87106252df59dd40dd39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;