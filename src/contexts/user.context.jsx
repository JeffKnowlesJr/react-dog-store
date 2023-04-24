import { createContext, useEffect, useReducer } from 'react'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.util'
import { createAction } from '../utils/reducer/reducer.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, { type, payload }) => {
  console.log(`Dispatched action: ${type}`)
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return { ...state, currentUser: payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${type} in userReducer`)
    }
  }
}

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null)
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)
  // console.log(`User Provider Current User: ${JSON.stringify(currentUser)}`)

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }

  const value = { currentUser, setCurrentUser }

  // Empty dependency array means that we only run this once on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user)
      // console.log(`User Context: ${JSON.stringify(user)}`)
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
