// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain, 
  databaseURL: process.env.databaseURL, 
  projectId: process.env.projectId, 
  storageBucket: process.env.storageBucket, 
  messagingSenderId: process.env.messagingSenderId, 
  appId: process.env.appId, 
  measurementId: process.env.measurementId, 
};

const app = initializeApp(firebaseConfig);
const firestoreInstance = getFirestore(app);

// ### Here it's working but the same code on app1 not working ####
const getCollectionExample = async () => {
  const querySnapshot = await getDocs(collection(firestoreInstance, "teste"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });  
}

getCollectionExample()


export { app, firestoreInstance };