// Import the functions you need from the SDKs you need
import { initializeApp,get } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCDfY3R8aaYzdwwg-zCx9trcYJWjmzNq3w",
  authDomain: "interior-design-6365f.firebaseapp.com",
  projectId: "interior-design-6365f",
  storageBucket: "interior-design-6365f.appspot.com",
  messagingSenderId: "97570017833",
  appId: "1:97570017833:web:fce589582861f10860c238"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;