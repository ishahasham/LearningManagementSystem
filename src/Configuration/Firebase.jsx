// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'; // Import Firebase Storage
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybcwJxDYfzeRWMILyS_AeCnDy6GOzpvI",
  authDomain: "learningmanagementsystem-f29e4.firebaseapp.com",
  projectId: "learningmanagementsystem-f29e4",
  storageBucket: "learningmanagementsystem-f29e4.appspot.com",
  messagingSenderId: "11781854066",
  appId: "1:11781854066:web:38bd2e029fdd7a006103eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

// Initialize Firebase Storage
const storage = getStorage(app);


export { auth, database, storage };