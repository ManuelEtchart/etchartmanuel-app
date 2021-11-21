import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgr6wtFlK7T2aEJlmKNx0HW-uR6LjbRQw",
  authDomain: "etchartmanuel-app.firebaseapp.com",
  projectId: "etchartmanuel-app",
  storageBucket: "etchartmanuel-app.appspot.com",
  messagingSenderId: "874244262218",
  appId: "1:874244262218:web:d02db16c1158f2ba0bd9b3"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return firebase.firestore(app)
}