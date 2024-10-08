// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-ai-33be3.firebaseapp.com",
  projectId: "blog-ai-33be3",
  storageBucket: "blog-ai-33be3.appspot.com",
  messagingSenderId: "963967071432",
  appId: "1:963967071432:web:b933f8e9bcbf8eed2561fd",
  measurementId: "G-XRDQQ91MGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);