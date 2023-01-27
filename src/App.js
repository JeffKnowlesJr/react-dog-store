import categoryComponent from './components/category/category.component'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Toys'
    },
    {
      id: 2,
      title: 'Treats'
    },
    {
      id: 3,
      title: 'Leashes'
    },
    {
      id: 4,
      title: 'Collars'
    },
    {
      id: 5,
      title: 'Beds'
    }
  ]

  return (
    <div className="categories_container">
      {categories.map(({ title }) => {
        return (
          <div className="category_container">
            <div className="category_container__image"></div>
            <div className="category_body__container">
              <h3>{title}</h3>
              <p>Shop Now</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
