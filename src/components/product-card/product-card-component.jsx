import { useContext } from 'react'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

import {
  ProductCardContainer,
  ProductImage,
  ProductFooter,
  ProductName,
  ProductPrice
} from './product-card.styles'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)

  const addProductToCart = () => {
    addItemToCart(product)
  }

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
