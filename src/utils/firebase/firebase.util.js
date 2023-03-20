// Utils file functions as an additional layer between the service and my application
// Import the config file
import firebaseConfig from '../../config/firebase-config.json'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch
} from 'firebase/firestore'
import SHOP_DATA from '../../shop-data'

// Initialize Firebase
initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
  // A transaction is a word that represents a single unit of work to a database
  // A transaction may include a set of multiple required conditions
  const batch = writeBatch(db)
  // Now we need to create the batch
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const createUserDocumentFromAuth = async (userAuth, userInfo) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  // Check if user data exists
  // If not exists: Create document from userAuth
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...userInfo })
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }
  // If exists: Return userDocRef
}

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

// Another helper function
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
}
