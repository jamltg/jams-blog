// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jams-blog-3611b.firebaseapp.com",
  projectId: "jams-blog-3611b",
  storageBucket: "jams-blog-3611b.appspot.com",
  messagingSenderId: "207890195803",
  appId: "1:207890195803:web:b1a03db199dc847d2f267e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);