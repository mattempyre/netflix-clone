// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5PrQ_OFEnmT_uofMetwPBOK2mino0Abo',
  authDomain: 'netflix-clone-825d3.firebaseapp.com',
  projectId: 'netflix-clone-825d3',
  storageBucket: 'netflix-clone-825d3.appspot.com',
  messagingSenderId: '1047364967788',
  appId: '1:1047364967788:web:2a3a76261a1f8be632e749',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
