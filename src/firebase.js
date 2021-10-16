import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const fire = firebase.initializeApp({
    apiKey: process.env.React_App_ApiKey,
    authDomain: process.env.React_App_AuthDomain,
    projectId: process.env.React_App_ProjectId,
    storageBucket: process.env.React_App_StorageBucket,
    messagingSenderId: process.env.React_App_MessagingSenderId,
    appId: process.env.React_App_AppId,
})



export const auth = fire.auth()
export const firestore = firebase.firestore()

export default fire