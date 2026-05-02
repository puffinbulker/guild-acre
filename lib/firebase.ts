import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvfKQOVBjqiSipOkM1woYLS1m5XqpFkRw",
  authDomain: "guildacre.firebaseapp.com",
  projectId: "guildacre",
  storageBucket: "guildacre.appspot.com", // ✅ FIXED
  messagingSenderId: "778744088416",
  appId: "1:778744088416:web:635fbff47b86a37b590005",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);