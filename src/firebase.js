import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBqBcQZv5ozRs2WWvwU-7ESNpk9ufPMIW0",
  authDomain: "roamigo-0.firebaseapp.com",
  projectId: "roamigo-0",
  storageBucket: "roamigo-0.firebasestorage.app",
  messagingSenderId: "2371854925",
  appId: "1:2371854925:web:89fcbd8f168e2d1545b204",
  measurementId: "G-CQN9FVT9Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }; 