import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGmtGzR6YzOvvVQYJCM34LP2H91m42qGQ",
  authDomain: "fju-jiu-jitsu.firebaseapp.com",
  projectId: "fju-jiu-jitsu",
  storageBucket: "fju-jiu-jitsu.firebasestorage.app",
  messagingSenderId: "967181597457",
  appId: "1:967181597457:web:c2e721a63f14407bf2eab0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // <- inicializa o Firestore aqui

export { auth, db };
