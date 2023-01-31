import { Routes, Route } from 'react-router-dom'
import Authentification from './routes/authentification/authentification.component'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'

const Shop = () => {
  return <h2>I am shop</h2>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/auth" element={<Authentification />}></Route>
      </Route>
    </Routes>
  )
}

export default App
