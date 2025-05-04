import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkN68KeZw478TuXiS0g3KKMYHQN3zFmXw", // Actual API key
  authDomain: "planetary-deep-sea-survival.firebaseapp.com", // Actual Auth Domain
  databaseURL: "https://planetary-deep-sea-survival-default-rtdb.asia-southeast1.firebasedatabase.app", // Actual Database URL
  projectId: "planetary-deep-sea-survival", // Actual Project ID
  storageBucket: "planetary-deep-sea-survival.firebasestorage.app", // Actual Storage Bucket
  messagingSenderId: "19888976863", // Actual Messaging Sender ID
  appId: "1:19888976863:web:9c63ce282e2fd4f7f3ca6a", // Actual App ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);