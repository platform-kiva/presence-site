import { createContext, useState } from "react";

import PRODUCT_DATA from '../../data/shop-data.json'

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [colors, setColors] = useState(COLOR_DATA)
    const value = { products }

    return (
        <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
    )
}
