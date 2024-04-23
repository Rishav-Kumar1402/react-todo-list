import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhCKTgMtDWaFShfUayoV3VCXdJ7cZ-rs",
  authDomain: "todo-list-b3b51.firebaseapp.com",
  databaseURL: "https://todo-list-b3b51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-list-b3b51",
  storageBucket: "todo-list-b3b51.appspot.com",
  messagingSenderId: "559080482821",
  appId: "1:559080482821:web:09da321c97a3abf477d46c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();