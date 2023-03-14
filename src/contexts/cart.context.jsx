import { createContext, useState } from 'react'

export const CartContext = createContext({
  isOpen: false,
  cartProducts: []
})

export const CartProvider = ({ children }) => {
  // const [products, setProducts] = useState(PRODUCTS)
  // const value = { products }
  // return (
  //   <ProductsContext.Provider value={value}>
  //     {children}
  //   </ProductsContext.Provider>
  // )
}
