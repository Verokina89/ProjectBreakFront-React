import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2O6-GCWX59UKxmXFKfkgitRXPdiWfwdc",
    authDomain: "backendshop-55d00.firebaseapp.com",
    projectId: "backendshop-55d00",
    storageBucket: "backendshop-55d00.firebasestorage.app",
    messagingSenderId: "744553208820",
    appId: "1:744553208820:web:6dc97676a38e04013537a1",
    measurementId: "G-6CHTTHBSLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);