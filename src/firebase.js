import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDx5tOq0qlfV7_uUtfNV0aIPNFI1y2eQrc",

  authDomain: "cannabis-app-414ed.firebaseapp.com",

  databaseURL: "https://cannabis-app-414ed-default-rtdb.firebaseio.com",

  projectId: "cannabis-app-414ed",

  storageBucket: "cannabis-app-414ed.appspot.com",

  messagingSenderId: "64488698765",

  appId: "1:64488698765:web:8f7627b6f68034ea7d83c4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;