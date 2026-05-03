import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvfKOQVBjqiSipOkM1woYlS1m5XqpFkRw",
  authDomain: "guildacre.firebaseapp.com",
  projectId: "guildacre",
  storageBucket: "guildacre.firebasestorage.app",
  messagingSenderId: "778744088416",
  appId: "1:778744088416:web:635fbff47b86a37b590005"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
