const {  getApps, getApp } = require ('firebase/app');
const { initializeApp } = require('firebase-admin')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey : "AIzaSyBh1iuq5428lxaDhGWSkiSnVm41q3aykTM" , 
  authDomain : "demodb-d1384.firebaseapp.com" , 
  databaseURL : "https://demodb-d1384-default-rtdb.firebaseio.com" , 
  projectId : "demodb-d1384" , 
  storageBucket : "demodb-d1384.appspot.com" , 
  messagingSenderId : "347279872200" , 
  appId : "1:347279872200:web:d9a1f6d3945fa48f8855fd" 
};

async function getData() {
  return new Promise(async (resolve, reject) => {
    // getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    initializeApp(firebaseConfig);
    const db = getFirestore();
    const doc = await db.collection('USD convert').doc('USD').get();
    if (!doc.exists) {
      console.log('No document!');
    }
    resolve(doc.data())
})
}

  
    initializeApp();
    const db = getFirestore();
    // const doc = db.collection('database').doc('LK').get();
    // if (!doc.exists) {
    //   console.log('No such document!');
    // }
  // Initialize Firebase


