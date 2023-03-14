import './product-card.styles.scss'

import Button from '../button/button.component'

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`Photo of ${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <div className="price">{price}</div>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  )
}

export default ProductCard
