import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as DogLogo } from '../../assets/dog-russel-logo.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.util'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const signOutHandler = async () => {
    const res = await signOutUser()
    setCurrentUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="navigation-logo__container" to="/">
          <div>
            <DogLogo className="navigation-logo" />
          </div>
        </Link>
        <div className="navigation__container">
          <Link className="navigation__link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="navigation__link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="navigation__link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
