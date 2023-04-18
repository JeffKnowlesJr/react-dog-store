import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'

import {
  NavigationContainer,
  NavigationLogo,
  NavigationLogoContainer,
  NavigationList,
  NavigationLink
} from './navigation.styles'

import { signOutUser } from '../../utils/firebase/firebase.util'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <Fragment>
      <NavigationContainer>
        <NavigationLogoContainer to="/">
          <div>
            <NavigationLogo />
          </div>
        </NavigationLogoContainer>
        <NavigationList>
          <NavigationLink to="/shop">Shop</NavigationLink>
          {currentUser ? (
            <NavigationLink as="span" onClick={signOutUser}>
              Sign Out
            </NavigationLink>
          ) : (
            <NavigationLink to="/auth">Sign In</NavigationLink>
          )}
          <CartIcon />
        </NavigationList>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
