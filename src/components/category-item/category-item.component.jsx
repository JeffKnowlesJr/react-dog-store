import { useNavigate } from 'react-router-dom'

import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer
} from './category-item.styles'

const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <h3 className="category__title">{title}</h3>
        <p className="category__cta">Shop Now</p>
      </CategoryBodyContainer>
    </CategoryContainer>
  )
}

export default CategoryItem
