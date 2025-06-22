import { db } from './firebase.js';
import { collection, getDocs, query, orderBy } from 'https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js';

const container = document.getElementById('cards-container');

async function carregarPreinscritos() {
  // Troque 'preinscritos' por 'cadastros' (sua coleção real)
  // E comente orderBy se não tiver campo timestamp
  // const q = query(collection(db, 'cadastros'), orderBy('timestamp', 'desc'));
  const q = collection(db, 'cadastros');

  const querySnapshot = await getDocs(q);

  if(querySnapshot.empty) {
    container.innerHTML = '<p>Nenhum pré-inscrito encontrado.</p>';
    return;
  }

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    
    const card = document.createElement('div');
    card.classList.add('card'); // usar .card para seu estilo CSS

    card.innerHTML = `
      <h3>${data.nome}</h3>
      <p><strong>Idade:</strong> ${data.idade}</p>
      <p><strong>Endereço:</strong> ${data.endereco}</p>
      <p><strong>Telefone:</strong> ${data.telefone}</p>
    `;

    container.appendChild(card);
  });
}

carregarPreinscritos();
