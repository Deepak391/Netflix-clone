// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe1E85B8uQOIM8C2BL_TrXcoA55aYM4mc",
  authDomain: "netflix-ty.firebaseapp.com",
  projectId: "netflix-ty",
  storageBucket: "netflix-ty.appspot.com",
  messagingSenderId: "955314642433",
  appId: "1:955314642433:web:d4819e56bf9a0f4832aa00"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }