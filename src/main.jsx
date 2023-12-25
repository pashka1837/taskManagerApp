import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

import App from './App';
import './index.css';

const auth = getAuth();
connectAuthEmulator(auth, 'http://127.0.0.1:9099');

const firebaseConfig = {
  apiKey: 'AIzaSyDyJwz8Ey9aYwewK-3fPvliG8ZElPRT0ic',
  authDomain: 'taskapp-906d2.firebaseapp.com',
  projectId: 'taskapp-906d2',
  storageBucket: 'taskapp-906d2.appspot.com',
  messagingSenderId: '325879492346',
  appId: '1:325879492346:web:816f79977209d4af862343',
  measurementId: 'G-FV94K05G14',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
