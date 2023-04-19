import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer
} from './category-item.styles'

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category

  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h3 className="category__title">{title}</h3>
        <p className="category__cta">Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )
}

export default CategoryItem
