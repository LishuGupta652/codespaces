import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  updateDoc,
} from "firebase/firestore";
// auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth();

// collection ref
const colRef = collection(db, "books");

// queries
const q = query(
  colRef,
  where("author", "==", "lishu"),
  orderBy("title", "desc")
);

// get real time  data
// onSnapshot(q, (snapshot) => {
//   let books = [];
//   snapshot.docs.forEach((doc) => {
//     books.push({ ...doc.data(), id: doc.id });
//   });
//   console.log(books);
// });

// Add a document
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

// Delete a document
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);

  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});

// Get a signle document
// const docRef=  doc(db, "books", "")

// updating doc
// const updateForm = document.querySelector(".update");
// updateForm.addEventListener("submit", () => {
//   e.preventDefault();

//   const docRef = doc(db, "books", deleteBookForm.id.value);

//   updateDoc(docRef, {
//     title: addBookForm.title.value || "updated title",
//     author: addBookForm.author.value || "updated author",
//   }).then(() => {
//     updateForm.reset();
//     addBookForm.reset();
//   });
// });

// signup the user
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("in signup menu");
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("User Created", cred.user);
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// login
