import { createContext, useState } from 'react'

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  // if found, increment quantity
  // return new array with modified cartItems/new cart item
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { isCartOpen, setIsCartOpen }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
