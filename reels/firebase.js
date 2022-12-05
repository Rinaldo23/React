// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvcH6SHhNqqSHIDmP-1XPi5Zh01sFOhmY",
  authDomain: "reels-clone-9a764.firebaseapp.com",
  projectId: "reels-clone-9a764",
  storageBucket: "reels-clone-9a764.appspot.com",
  messagingSenderId: "228360372397",
  appId: "1:228360372397:web:9d00cc066e26bc5fa68624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default app;
export {auth}