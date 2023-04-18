import './category-list.styles.scss'
import CategoryItem from '../category-item/category-item.component'
import { Link } from 'react-router-dom'

import categories from '../../data/categories.data.json'

const CategoryList = () => {
  return (
    <div className="categories__container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default CategoryList
