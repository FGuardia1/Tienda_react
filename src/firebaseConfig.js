// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH07YdAeTnEuJOMg76jTlYSPcG2nuTiTA",
  authDomain: "tienda-ecommerce-e5293.firebaseapp.com",
  projectId: "tienda-ecommerce-e5293",
  storageBucket: "tienda-ecommerce-e5293.appspot.com",
  messagingSenderId: "771562400005",
  appId: "1:771562400005:web:13823bad88b188eaeb2f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)
export default db