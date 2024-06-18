import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PRO_ID,
  storageBucket: import.meta.env.VITE_STORAGE_ID,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: 'https://farm-rent-e4d12-default-rtdb.firebaseio.com'
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export default db;
