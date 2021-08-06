import firebase from 'firebase/app';

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDkGAFDWxgTRmxKdu-jI3NqoqPnsoxNmzM",
    authDomain: "react-fashionroom-cho.firebaseapp.com",
    projectId: "react-fashionroom-cho",
    storageBucket: "react-fashionroom-cho.appspot.com",
    messagingSenderId: "739728331912",
    appId: "1:739728331912:web:7ab336c638445f0a01bb3d"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();