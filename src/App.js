import './categories.styles.scss'

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Toys',
      imageURL: './480x320.jpg'
    },
    {
      id: 2,
      title: 'Treats',
      imageURL: './480x321.jpg'
    },
    {
      id: 3,
      title: 'Leashes',
      imageURL: './480x322.jpg'
    },
    {
      id: 4,
      title: 'Collars',
      imageURL: './800x490.jpg'
    },
    {
      id: 5,
      title: 'Beds',
      imageURL: './800x491.jpg'
    }
  ]

  return (
    <div className="categories__container">
      {categories.map(({ title, id, imageURL }) => {
        return (
          <div key={id} className="category__container">
            <div
              className="category__image"
              style={{
                backgroundImage: `url(${imageURL})`
              }}
            />
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
