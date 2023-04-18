import { CategoriesPreviewContainer } from './categories-preview.styles'

import { useContext } from 'react'

import CategoryPreview from '../../components/category-preview/category-preview.component'
import { CategoriesContext } from '../../contexts/categories.context'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </CategoriesPreviewContainer>
  )
}

export default CategoriesPreview
