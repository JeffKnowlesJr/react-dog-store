import { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as DogLogo } from '../../assets/dog-russel-logo.svg'
import './navigation.styles.scss'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.util'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

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
            <span className="navigation__link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="navigation__link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
