// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAntbnBGo2bhIObFBBg21gGPTeJ33UJ3Q",
  authDomain: "kanban-app-e276d.firebaseapp.com",
  projectId: "kanban-app-e276d",
  storageBucket: "kanban-app-e276d.appspot.com",
  messagingSenderId: "603972419697",
  appId: "1:603972419697:web:3ab33a9f8ac99573725bd0",
  measurementId: "G-P1P9R25V3Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
