import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBxDZWqh6vDGewBZGkbO426eqbAhUhaHnA",
  authDomain: "codespace007.firebaseapp.com",
  projectId: "codespace007",
  storageBucket: "codespace007.appspot.com",
  messagingSenderId: "678936395038",
  appId: "1:678936395038:web:32099adf90afcda2615d0f",
};

// init firebae app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef).then((snapshot) => {
    
});
