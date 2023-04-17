import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.util.js'

// import SHOP_DATA from '../shop-data.js'
// obsolete after 1 time import, not done on FE

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments()
        console.log(`Category map:\n ${JSON.stringify(categoryMap)}`)
        setCategoriesMap(categoryMap)
      } catch (error) {
        console.error(error)
      }
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
