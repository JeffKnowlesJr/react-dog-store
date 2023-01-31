// import { useEffect } from 'react'
// import { getRedirectResult } from 'firebase/auth'

import SignInForm from '../../components/sign-in-form/sign-in-form.component'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const Authentification = () => {
  return (
    <div>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentification
