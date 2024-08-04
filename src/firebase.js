import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN6SRN2J13DNzYZ7R6SA7PymCOcmCw1YU",
  authDomain: "pantry-tracker-11.firebaseapp.com",
  projectId: "pantry-tracker-11",
  storageBucket: "pantry-tracker-11.appspot.com",
  messagingSenderId: "1037429844342",
  appId: "1:1037429844342:web:25cd0fb57d245f7accb257",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };