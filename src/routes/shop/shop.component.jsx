import { useContext } from 'react'

import ProductCard from '../../components/product-card/product-card-component'
import './shop.styles.scss'

import { CategoriesContext } from '../../contexts/categories.context'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className="product-container">
      {categoriesMap.map((category) => (
        <ProductCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Shop
