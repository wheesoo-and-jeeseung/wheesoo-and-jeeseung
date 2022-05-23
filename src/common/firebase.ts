import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4u5Vwb8ffEJ9bfsXr40HENrdtmahnfyU",
    authDomain: "wedding-invitation-33f2e.firebaseapp.com",
    projectId: "wedding-invitation-33f2e",
    storageBucket: "wedding-invitation-33f2e.appspot.com",
    messagingSenderId: "392740705091",
    appId: "1:392740705091:web:a0c6620534679c496095f6",
    measurementId: "G-V2J36HR98Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)