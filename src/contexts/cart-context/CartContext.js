import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartEmpty: true,
    setIsCartEmpty: () => {}
})

export const CartProvider = ({ children }) => {
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const value = {isCartEmpty, setIsCartEmpty}

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}