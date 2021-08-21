import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCgis8YgiDLmxyosrtmsEO4ZLngAWmiXsc",
    authDomain: "book-online-457b8.firebaseapp.com",
    projectId: "book-online-457b8",
    storageBucket: "book-online-457b8.appspot.com",
    messagingSenderId: "1039772611833",
    appId: "1:1039772611833:web:4e88b2c10ba15e4e699e28"
};
const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();
export default fire;