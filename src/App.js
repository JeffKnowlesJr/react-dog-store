import './categories.styles.scss'
import CategoryItem from './components/category-item/category-item.component'

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
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />
      })}
    </div>
  )
}

export default App
