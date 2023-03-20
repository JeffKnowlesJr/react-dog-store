import { createContext, useState, useEffect } from 'react'

import { addCollectionAndDocuments } from '../utils/firebase/firebase.util.js'

// import SHOP_DATA from '../shop-data.js'
// obsolete after 1 time import, not done on FE

export const ProductsContext = createContext({
  products: []
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  const value = { products }
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
