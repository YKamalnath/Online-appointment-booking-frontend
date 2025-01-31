import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaSVddSEggqXQ3HCBrBxhCXvYQTShKSpo",
  authDomain: "sanji-medical.firebaseapp.com",
  projectId: "sanji-medical",
  storageBucket: "sanji-medical.firebasestorage.app",
  messagingSenderId: "473224722958",
  appId: "1:473224722958:web:468b4355cae7e8351c9a5f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
