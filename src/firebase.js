import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const fire = firebase.initializeApp({
    apiKey: "AIzaSyCLk15HYk2dWB1-PVnsnk2_UPwZl0ffK1Q",
    authDomain: "eazy-options-auth.firebaseapp.com",
    projectId: "eazy-options-auth",
    storageBucket: "eazy-options-auth.appspot.com",
    messagingSenderId: "1004983157468",
    appId: "1:1004983157468:web:c08d2255b500a18cff2a19"
})

export const auth = fire.auth()
export default fire