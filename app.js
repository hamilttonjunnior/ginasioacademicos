import { db } from './firebase-config.js';
import { 
  collection, 
  addDoc, 
  getDocs, 
  onSnapshot, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Referências das coleções no Firestore
const marcacoesRef = collection(db, "marcacoes");
const treinadoresRef = collection(db, "treinadores");
const atletasRef = collection(db, "atletas");

// === 1. GESTÃO DE TREINADORES ===
export async function salvarTreinador(nome, contacto, escalao) {
  try {
    await addDoc(treinadoresRef, { nome, contacto, escalao });
  } catch (e) {
    console.error("Erro ao guardar treinador: ", e);
  }
}

export function carregarTreinadores(callback) {
  onSnapshot(treinadoresRef, (snapshot) => {
    const treinadores = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(treinadores);
  });
}

// === 2. GESTÃO DE ATLETAS ===
export async function salvarAtleta(nome, vinculo, escalao, treinadorId) {
  try {
    await addDoc(atletasRef, { nome, vinculo, escalao, treinadorId });
  } catch (e) {
    console.error("Erro ao guardar atleta: ", e);
  }
}

export function carregarAtletas(callback) {
  onSnapshot(atletasRef, (snapshot) => {
    const atletas = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(atletas);
  });
}

// === 3. GESTÃO DE MARCAÇÕES ===
export async function salvarMarcacao(data, horaInicio, horaFim, treinador, atividade, vinculo) {
  try {
    await addDoc(marcacoesRef, { data, horaInicio, horaFim, treinador, atividade, vinculo });
  } catch (e) {
    console.error("Erro ao guardar marcação: ", e);
  }
}

export function carregarMarcacoes(callback) {
  const q = query(marcacoesRef, orderBy("horaInicio", "asc"));
  onSnapshot(q, (snapshot) => {
    const marcacoes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(marcacoes);
  });
}

export async function deletarMarcacao(id) {
  try {
    await deleteDoc(doc(db, "marcacoes", id));
  } catch (e) {
    console.error("Erro ao cancelar marcação: ", e);
  }
}
