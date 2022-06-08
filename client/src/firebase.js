// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV5BZO55zOXsCfJ7wfeolxQqeDQHXBqdQ",
  authDomain: "ecommerce-2c3ae.firebaseapp.com",
  projectId: "ecommerce-2c3ae",
  storageBucket: "ecommerce-2c3ae.appspot.com",
  messagingSenderId: "243094340847",
  appId: "1:243094340847:web:815a394c21ad7031e5871a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
