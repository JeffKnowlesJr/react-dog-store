import { CategoriesContainer } from './category-list.styles'
import CategoryItem from '../category-item/category-item.component'

import categories from '../../data/categories.data.json'

const CategoryList = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </CategoriesContainer>
  )
}

export default CategoryList
