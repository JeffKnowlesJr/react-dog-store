import { CategoryiesContainer } from './category-list.styles'
import CategoryItem from '../category-item/category-item.component'

import categories from '../../data/categories.data.json'

const CategoryList = () => {
  return (
    <CategoryiesContainer>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </CategoryiesContainer>
  )
}

export default CategoryList
