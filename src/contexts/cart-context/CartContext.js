import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd, size) => {
    // const itemExists = cartItems.find((item) => item.id === productToAdd.id)

    // if (itemExists) {
    //     return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
    //         {...cartItem, quantity: cartItem.quantity + 1}
    //         : cartItem
    //     )
    // }
    console.log([...cartItems, { ...productToAdd, quantity: 1, size: size}])
    return [...cartItems, { ...productToAdd, quantity: 1, size: size}]
}

export const CartContext = createContext({
    // isCartEmpty: true,
    // setIsCartEmpty: () => {},
    cartItems: [],
    cartCount: 0,
    addItemToCart: () => {}
})

export const CartProvider = ({ children }) => {
    // const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd, size) => {
        setCartItems(addCartItem(cartItems, productToAdd, size))
    }


    const value = {cartCount, cartItems, addItemToCart }

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}