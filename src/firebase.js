import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-5EPE1UCGGuILnfv9eUddWRK_YlZ5Nxo",
  authDomain: "netflix-clone-7f6dc.firebaseapp.com",
  projectId: "netflix-clone-7f6dc",
  storageBucket: "netflix-clone-7f6dc.appspot.com",
  messagingSenderId: "233302359792",
  appId: "1:233302359792:web:ffcb2d6c29055dd59c4c35",
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);

// // const firebaseApp = firebase.initializeApp(firebaseConfig);
// // const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
