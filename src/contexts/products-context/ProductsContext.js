import { createContext, useEffect, useState } from "react";

import { getProductsAndDocuments } from "../../utils/firebase/FirebaseUtils";

export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])

    useEffect(() => {
        const getProducts = async () => {
            const products = await getProductsAndDocuments()
            console.log(products)
            setProducts(products)
        }
        getProducts()
    }, [])

    const value = { products }

    return (
        <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
    )
}
