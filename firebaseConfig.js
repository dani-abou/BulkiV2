// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app;
//App instance
if (!getApps().length) {
  const firebase = initializeApp(firebaseConfig);
  //Analytics
  // const analytics = getAnalytics(firebase);
  //Database
  const firestore = initializeFirestore(firebase, { experimentalForceLongPolling: true, useFetchStreams: false })
  //File storage
  const storage = getStorage(firebase)
  console.log(storage)
  app = { firebase, firestore, storage }
}

export default app;

