import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd, size) => {
    const sizeID = productToAdd.id + size
    console.log(sizeID)
    const itemExists = cartItems.find(
        (item) => item.sizeID === sizeID
    )

    if (itemExists) {
        
        return cartItems.map((cartItem) => 
            cartItem.sizeID === sizeID 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1, size: size, sizeID: sizeID}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (item) => item.sizeID === cartItemToRemove.sizeID
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.sizeID !== cartItemToRemove.sizeID)
    }

    return cartItems.map((cartItem) =>
        cartItem.sizeID === cartItemToRemove.sizeID 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    )
}

export const CartContext = createContext({
    // isCartEmpty: true,
    // setIsCartEmpty: () => {},
    cartItems: [],
    cartCount: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {}
})

export const CartProvider = ({ children }) => {
    // const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
        console.log(cartItems)
    }, [cartItems])

    const addItemToCart = (productToAdd, size) => {
        setCartItems(addCartItem(cartItems, productToAdd, size))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const value = {cartCount, cartItems, addItemToCart, removeItemFromCart }

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
}