import firebase from 'firebase'
import 'firebase/firestore'
import { firebaseConfigs } from '@/.env'
export default firebase.initializeApp(firebaseConfigs)
