import { auth } from "./src/js/firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const btnSair = document.getElementById("btn-sair");

if (btnSair) {
  btnSair.addEventListener("click", () => {
    signOut(auth).then(() => {
      // Logout realizado, redireciona para login ou página pública
      window.location.href = "login.html";
    }).catch((error) => {
      console.error("Erro ao sair:", error);
      alert("Não foi possível sair. Tente novamente.");
    });
  });
}
