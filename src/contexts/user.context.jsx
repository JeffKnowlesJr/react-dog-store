import { createContext, useState, useEffect } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.util'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }

  // Empty dependency array means that we only run this once on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      console.log(user)
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}