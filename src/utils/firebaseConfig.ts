import firebase from 'firebase/compat/app'
import  'firebase/compat/analytics'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAcgtV4EKYwkh79vpAdhM1EfsHiuKHG3ic",
    authDomain: "nizhgo-cats-5ba3f.firebaseapp.com",
    projectId: "nizhgo-cats-5ba3f",
    storageBucket: "nizhgo-cats-5ba3f.appspot.com",
    messagingSenderId: "237578029883",
    appId: "1:237578029883:web:e739a0a00203f92a07051e",
    databaseURL: "https://nizhgo-cats-5ba3f-default-rtdb.europe-west1.firebasedatabase.app",
    measurementId: "G-GF1H79254X"
};

firebase.initializeApp(firebaseConfig);

export const firebaseAnalytics = firebase.analytics();
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
