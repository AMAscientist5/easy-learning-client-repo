// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOBrYi27mDAkNWMBXBsdtoBAwDpRQy5Ao",
  authDomain: "easy-learning-plartform.firebaseapp.com",
  projectId: "easy-learning-plartform",
  storageBucket: "easy-learning-plartform.appspot.com",
  messagingSenderId: "833095271749",
  appId: "1:833095271749:web:346c50addf4f9f2c42ea2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;