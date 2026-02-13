// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyATP29nvKklP74LiGecss2LC_YyIipJLm8",
    authDomain: "rosca-f4e88.firebaseapp.com",
    projectId: "rosca-f4e88",
    storageBucket: "rosca-f4e88.firebasestorage.app",
    messagingSenderId: "326590683447",
    appId: "1:326590683447:web:8f7cb337c8ad8c8549a2b2",
    measurementId: "G-K22DZX55C3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);