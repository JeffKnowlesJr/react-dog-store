import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { title, imageURL } = category

  return (
    <div className="category__container">
      <div
        className="category__image"
        style={{
          backgroundImage: `url(${imageURL})`
        }}
      />
      <div className="category-body__container">
        <h3 className="category__title">{title}</h3>
        <p classname="category__cta">Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
