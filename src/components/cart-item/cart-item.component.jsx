import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem
  return (
    <div className="">
      <h2 className="">{name}</h2>
      <span className="">{quantity}</span>
    </div>
  )
}

export default CartItem
