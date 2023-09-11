// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrid_qXjuf21_FtjgHK8W5a0Nut6Z0dv8',
  authDomain: 'nc-beat-it.firebaseapp.com',
  projectId: 'nc-beat-it',
  storageBucket: 'nc-beat-it.appspot.com',
  messagingSenderId: '888915886509',
  appId: '1:888915886509:web:6c29763d151d676c536124',
  measurementId: 'G-9G4TCDX6C7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
