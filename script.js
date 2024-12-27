const firebaseConfig = {
  apiKey: "AIzaSyD1_jce8AKIShD-10OQFHZMgtnPJbjC2pw",
  authDomain: "piba-happy-new-year.firebaseapp.com",
  databaseURL: "https://piba-happy-new-year-default-rtdb.firebaseio.com",
  projectId: "piba-happy-new-year",
  storageBucket: "piba-happy-new-year.firebasestorage.app",
  messagingSenderId: "627238322422",
  appId: "1:627238322422:web:6c25a982ce66f437fdacd7",
  measurementId: "G-148ZJ9K8ZQ"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const container = document.getElementById("container");

// Atualizar o layout em tempo real
db.ref('settings').on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    if (data) {
        container.style.backgroundColor = data.bgColor;
        container.className = data.animation; // Aplica a classe da animação
    }
});
