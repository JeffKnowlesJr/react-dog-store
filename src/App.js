import './categories.styles.scss'

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
    <div className="categories__container">
      {categories.map(({ title, id }) => {
        return (
          <div key={id} className="category__container">
            <div className="category__image"></div>
            <div className="category-body__container">
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
