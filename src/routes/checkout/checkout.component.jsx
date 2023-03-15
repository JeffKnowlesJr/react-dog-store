import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  return (
    <div className="">
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem
        return (
          <div key={id} className="">
            <h2>{name}</h2>
            <span>{quantity}</span>
            <br />
            <span onClick={() => addItemToCart(cartItem)}>add</span>
            {/* How does the above work when not rendering an anonymous function creates an infinite loop */}
            <br />
            <span onClick={() => removeItemFromCart(cartItem)}>remove</span>
          </div>
        )
      })}
    </div>
  )
}

export default Checkout
