const splash = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2500);
})

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiN-d0o87NAdA7-ZVBvGDfKdViHqVLfd4",
  authDomain: "test-firebase-ac147.firebaseapp.com",
  projectId: "test-firebase-ac147",
  storageBucket: "test-firebase-ac147.appspot.com",
  messagingSenderId: "187606455818",
  appId: "1:187606455818:web:81c2bbf6909165a931f1f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);