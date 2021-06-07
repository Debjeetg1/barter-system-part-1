
import firebase from 'firebase'





const firebaseConfig = {
    apiKey: "AIzaSyC2bAC3GsuDiXuaI4X2y-w1RsKdqGFR9CA",
    authDomain: "barter-system-6276e.firebaseapp.com",
    projectId: "barter-system-6276e",
    storageBucket: "barter-system-6276e.appspot.com",
    messagingSenderId: "121237119044",
    appId: "1:121237119044:web:dd73b42c08236cc6999c11",
    databaseURL: "https://barter-system.firebaseio.com",
    
    };
    
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()