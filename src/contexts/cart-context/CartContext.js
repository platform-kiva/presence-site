import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const itemExists = cartItems.find((item) => item.id === productToAdd.id)

    if (itemExists) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isCartEmpty: true,
    setIsCartEmpty: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }


    const value = {isCartEmpty, setIsCartEmpty, cartItems, addItemToCart }

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}