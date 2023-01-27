import { signInWithGooglePopup } from '../../utils/firebase/firebase.util'

const SignIn = () => {
  const logGoogleUser = async (user) => {
    const res = await signInWithGooglePopup()
    console.log(res)
  }
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn
