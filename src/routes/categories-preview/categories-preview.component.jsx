import { CategoryPreviewContainer } from './categories-preview.styles'

import { useContext } from 'react'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <CategoryPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </CategoryPreviewContainer>
  )
}

export default CategoriesPreview
