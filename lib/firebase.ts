// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvfK0QVBjqiSip0kM1woY1S1m5XqpFkRw",
  authDomain: "guildacre.firebaseapp.com",
  projectId: "guildacre",
  storageBucket: "guildacre.firebasestorage.app",
  messagingSenderId: "778744088416",
  appId: "1:778744088416:web:635fbff47b86a37b590005",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);