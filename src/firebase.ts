import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAnHBlX_riiehk0CPAba1nmwoiCeV63kw",
  authDomain: "twitter-app-de156.firebaseapp.com",
  projectId: "twitter-app-de156",
  storageBucket: "twitter-app-de156.appspot.com",
  messagingSenderId: "369870108262",
  appId: "1:369870108262:web:a96b71851b6120b2e4dfa7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
