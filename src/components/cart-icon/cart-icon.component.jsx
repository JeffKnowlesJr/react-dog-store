import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {
  CartIconContainer,
  ItemCountContainer,
  ShoppingIcon
} from './cart-icon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  )
}

export default CartIcon
