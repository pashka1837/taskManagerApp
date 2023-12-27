const admin = require('firebase-admin'); // required
// import admin from 'firebase-admin';
// const faker = require('faker'); // amazing library!
// import data from './data.json';
const data = require('./data2.json');

// initialization
const projectId = 'taskapp-906d2';
process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
admin.initializeApp({ projectId });

const db = admin.firestore();

// seed function
function getSeedData() {
  try {
    db.collection('users').add(data);
    console.log('database seed was successful');
  } catch (error) {
    console.log(error, 'database seed failed');
  }
}

getSeedData();
