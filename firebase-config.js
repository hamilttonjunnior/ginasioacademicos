// Importar os serviços do Firebase via CDN (Módulos ES6)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Configuração do Firebase extraída da sua imagem
const firebaseConfig = {
  apiKey: "AIzaSyAlxQwwkAu0b7vSlYiPrMSbgOExA9I8NDk",
  authDomain: "ginasioacademicos.firebaseapp.com",
  projectId: "ginasioacademicos",
  storageBucket: "ginasioacademicos.firebasestorage.app",
  messagingSenderId: "439823065516",
  appId: "1:439823065516:web:f58a02b8d775437b99da09",
  measurementId: "G-MXYVD291LH"
};

// Inicializar o Firebase e o Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
