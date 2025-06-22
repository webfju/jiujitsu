// Firebase modular - login.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

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

// 🔐 Função de login com persistência local
window.login = () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Configura para manter o usuário logado mesmo ao fechar o navegador
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, senha);
    })
    .then(() => {
      alert("Login realizado com sucesso!");
      window.location.href = "restrita.html";
    })
    .catch((error) => {
      alert("Erro ao fazer login: " + error.message);
    });
};

// 🔁 Função de recuperação de senha
window.esqueciSenha = () => {
  const email = document.getElementById("email").value;

  if (!email) {
    alert("Por favor, insira seu e-mail para recuperar a senha.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("E-mail de recuperação enviado! Verifique sua caixa de entrada.");
    })
    .catch((error) => {
      alert("Erro ao enviar e-mail de recuperação: " + error.message);
    });
};
