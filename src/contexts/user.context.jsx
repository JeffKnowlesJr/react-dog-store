import { createContext, useEffect, useReducer } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.util'

console.log(`User Context`)

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  console.log(`Dispatched \n Action: ${action}`)

  const { type, payload } = action

  const { SET_CURRENT_USER } = USER_ACTION_TYPES

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unknown action type: ${type}`)
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null)
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  console.log(`Current User: \n ${currentUser}`)

  const setCurrentUser = (user) => {
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER
    })
  }

  const value = { currentUser, setCurrentUser }

  // Empty dependency array means that we only run this once on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      // console.log(user)
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// Context is the values that we want to share throughout our app
// Reducer is a function that gets 2 properties, state and action
