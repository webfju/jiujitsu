// src/js/proteger-area.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAGmtGzR6YzOvvVQYJCM34LP2H91m42qGQ",
  authDomain: "fju-jiu-jitsu.firebaseapp.com",
  projectId: "fju-jiu-jitsu",
  storageBucket: "fju-jiu-jitsu.firebasestorage.app",
  messagingSenderId: "967181597457",
  appId: "1:967181597457:web:c2e721a63f14407bf2eab0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Protege área restrita
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// Exemplo de logout (opcional, se quiser usar)
const btnSair = document.getElementById("btn-sair");
if (btnSair) {
  btnSair.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  });
}
