import { useContext, Fragment } from 'react'

import './shop.styles.scss'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </div>
  )
}

export default Shop
