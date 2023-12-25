/* eslint-disable import/prefer-default-export */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDyJwz8Ey9aYwewK-3fPvliG8ZElPRT0ic',
  authDomain: 'taskapp-906d2.firebaseapp.com',
  projectId: 'taskapp-906d2',
  databaseURL: 'http://localhost:9000/?ns=data',
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
export const db = getDatabase();
export const auth = getAuth();

connectAuthEmulator(auth, 'http://127.0.0.1:9099');
connectDatabaseEmulator(db, 'http://127.0.0.1', 9000);
// const analytics = getAnalytics(app);
