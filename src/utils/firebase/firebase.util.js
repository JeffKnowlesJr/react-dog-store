// Utils file functions as an additional layer between the service and my application
// Import the config file
// import firebaseConfig from '../../config/firebase-config.json'

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
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

// Initialize Firebase
initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey)
  // A transaction is a word that represents a single unit of work to a database
  // A transaction may include a set of multiple required conditions
  const batch = writeBatch(db)
  // Now we need to create the batch
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

// Get Categories and Documents fetches products from Firebase and returns our Category Map

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, userInfo) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

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
