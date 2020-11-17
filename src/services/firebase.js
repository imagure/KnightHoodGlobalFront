import firebase from 'firebase/app'
import 'firebase/storage'

firebase.initializeApp(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

const storage = firebase.storage()

export {
  storage
}
