import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyABoXi-BeOSbH0lKVAGJpjbB-DuwueGsgI",
  authDomain: "se01-a19fa.firebaseapp.com",
  projectId: "se01-a19fa",
  storageBucket: "se01-a19fa.appspot.com",
  messagingSenderId: "217119902717",
  appId: "1:217119902717:web:0fa63047206f9cd234e794"
};

export const Firebase= firebase.initializeApp(firebaseConfig)


