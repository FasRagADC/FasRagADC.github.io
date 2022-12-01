 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
 import { getFirestore, collection, addDoc,getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBHxn_4dsWbavPcL0bhbI-5H8bHV9S0nCw",
   authDomain: "fasragcorporation.firebaseapp.com",
   databaseURL: "https://fasragcorporation-default-rtdb.firebaseio.com",
   projectId: "fasragcorporation",
   storageBucket: "fasragcorporation.appspot.com",
   messagingSenderId: "165378532775",
   appId: "1:165378532775:web:ed86005b023f8d36174282",
   measurementId: "G-E5MR2T0DJX"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 const analytics = getAnalytics(app); 


 export const saveTasks = (correo,comentario) => 
    addDoc(collection(db, 'task'), {correo: correo, comentario: comentario});


export const getTasks = () => getDocs(collection(db,'tasks'))

export const onGetTask = () => onSnapshot(collection(db, 'tasks'), callback)

