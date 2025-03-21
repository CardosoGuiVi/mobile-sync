import { db } from "./firebase-config.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";


document.getElementById('blackout').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "blackout",
        color1: "#000000",
        color2: "#000000"
    });
});

document.getElementById('logo').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "logo",
        message: "Tudo certo! Aguarde nosso culto começar…",
        color1: "#000000",
        color2: "#000000"
    });
});

document.getElementById('blink-time').addEventListener('input', () => {
    document.getElementById('blink-time-text').innerText = `Blink time (seg): ${document.getElementById('blink-time').value}`;
});

document.getElementById('blink').addEventListener('click', () => {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const blinkTime = document.getElementById('blink-time').value;

    set(ref(db, 'settings'), {
        animation: "blink",
        color1,
        color2,
        blinkTime
    });
});

document.getElementById('blink-default').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "blink",
        color1: "#000000",
        color2: "#ffffff",
        blinkTime: "4"
    });
});

document.getElementById('blink-60-seconds').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "blink",
        color1: "#000000",
        color2: "#ffffff",
        blinkTime: "2"
    });
});

document.getElementById('blink-10-seconds').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "blink",
        color1: "#000000",
        color2: "#ffffff",
        blinkTime: "1"
    });
});

document.getElementById('happy-new-year').addEventListener('click', () => {
    set(ref(db, 'settings'), {
        animation: "blink",
        color1: "#000000",
        color2: "#ffffff",
        blinkTime: "0.1",
        message: "Feliz Ano Novo!"
    });
});
