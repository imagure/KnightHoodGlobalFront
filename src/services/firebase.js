import firebase from 'firebase/app'
import 'firebase/storage'

console.log("Firebase config: ", process.env.REACT_APP_FIREBASE_CONFIG);

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

const storage = firebase.storage()

export {
  storage
}
