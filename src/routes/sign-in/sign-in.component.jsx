// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.util'

const SignIn = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRedirectResult(auth)
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user)
  //       }
  //     } catch (error) {
  //       console.log('there was an error fetching ', error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
      <SignInForm />
    </div>
  )
}

export default SignIn
