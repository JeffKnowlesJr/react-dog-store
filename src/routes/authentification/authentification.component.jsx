// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const Authentification = () => {
  return (
    <div>
      <SignUpForm />
      <SignInForm />
    </div>
  )
}

export default Authentification
