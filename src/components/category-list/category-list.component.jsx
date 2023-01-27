import categories from './categories.json'
import './category-list.styles.scss'
import CategoryItem from '../category-item/category-item.component'

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
