// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIy1vbwBB2wdYpjKOy6zM4UnKnEmZuq6A",
    authDomain: "genius-car-services-ac2f5.firebaseapp.com",
    projectId: "genius-car-services-ac2f5",
    storageBucket: "genius-car-services-ac2f5.appspot.com",
    messagingSenderId: "381079389174",
    appId: "1:381079389174:web:6962e353fe9289e05f3dd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;