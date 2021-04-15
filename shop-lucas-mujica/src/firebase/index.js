import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyC9XamuMc6g2I7oJ-oKMkslrE6YjYlYDNs',
  authDomain: 'coralbyte-6a0ee.firebaseapp.com',
  projectId: 'coralbyte-6a0ee',
  storageBucket: 'coralbyte-6a0ee.appspot.com',
  messagingSenderId: '326325479141',
  appId: '1:326325479141:web:d840ec99a7f01b4931560c',
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)
