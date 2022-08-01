// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

//App instance
const firebase = initializeApp(firebaseConfig);
//Analytics
const analytics = getAnalytics(app);
//Database
const firestore = getFirestore(firebase)
//File storage
const storage = getStorage()
const storageRef = ref(storage);

const app = { firebase, analytics, firestore, storage: storageRef }

export default app;

