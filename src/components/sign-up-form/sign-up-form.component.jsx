import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.util'
import Button from '../button/button.component'
import { SignUpFormContainer, SignUpTitle } from './sign-up-form.styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Event: \n', e)
    // Confirm that the password matches
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const { user } = await createAuthUserWithEmailandPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })

      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
      console.log('Error in user creation \n', error)
    }
    // Create a user document
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignUpFormContainer>
      <SignUpTitle>New Account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpForm
