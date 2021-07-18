import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDnsnHC2rW-fCkufbPBi1Y6Y3OP0Y8Hdr4",
    authDomain: "lonchiscuadernos-e9479.firebaseapp.com",
    projectId: "lonchiscuadernos-e9479",
    storageBucket: "lonchiscuadernos-e9479.appspot.com",
    messagingSenderId: "381854198155",
    appId: "1:381854198155:web:0f3e27a939f34994dae78e"
};

const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore();