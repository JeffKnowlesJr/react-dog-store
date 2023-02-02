import { useState, useContext } from 'react'
import FormInput from '../form-input/form-input.component'
import {
  signInAuthUserWithEmailandPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.util'
import Button from '../button/button.component'
import './sign-in-form.styles.scss'
import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const { setCurrentUser } = useContext(UserContext)
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      await createUserDocumentFromAuth(user)
      setCurrentUser(user)
    } catch (error) {
      console.log(`Error: \n ${error}`)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Event: \n', e)

    try {
      const { user } = await signInAuthUserWithEmailandPassword(email, password)
      setCurrentUser(user)
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Invalid email password combination')
          break // will stop checking cases after
        case 'auth/user-not-found':
          alert('There is no user with that email')
          break
        default:
          alert('Unable to sign in')
          console.log(error)
          break
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className="sign-up-container">
      <h2>Existing Account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
