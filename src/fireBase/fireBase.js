/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import {
  connectFirestoreEmulator, getFirestore, initializeFirestore, memoryLocalCache, persistentLocalCache,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDyJwz8Ey9aYwewK-3fPvliG8ZElPRT0ic',
  authDomain: 'taskapp-906d2.firebaseapp.com',
  databaseURL: 'https://taskapp-906d2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'taskapp-906d2',
  storageBucket: 'taskapp-906d2.appspot.com',
  messagingSenderId: '325879492346',
  appId: '1:325879492346:web:816f79977209d4af862343',
  measurementId: 'G-FV94K05G14',
};

// if (location.hostname === 'localhost') {
//   firebaseConfig = {

//   };
// }
const app = initializeApp(firebaseConfig);
initializeFirestore(app, { localCache: persistentLocalCache({ cacheSizeBytes: 100000 }) });
export const db = getFirestore(app);
export const auth = getAuth(app);

// connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// connectFirestoreEmulator(db, '127.0.0.1', 8080);
// connectDatabaseEmulator(db, 'http://127.0.0.1', 9000);
// const analytics = getAnalytics(app);
