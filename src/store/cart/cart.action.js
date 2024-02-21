import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd, size) => {
    const cartID = productToAdd.id + " " + size
    const itemExists = cartItems.find(
        (item) => item.cartID === cartID
    )
    if (itemExists) {
        return cartItems.map((cartItem) => 
            cartItem.cartID === cartID 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1, size: size, cartID: cartID}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (item) => item.cartID === cartItemToRemove.cartID
    )
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.cartID !== cartItemToRemove.cartID)
    }
    return cartItems.map(cartItem =>
        cartItem.cartID === cartItemToRemove.cartID 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    )
}

export const addItemToCart = (cartItems, productToAdd, size) => {
    const newCartItems = addCartItem(cartItems, productToAdd, size);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems});
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems});
}

export const clearCart = () => {
    return ({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: []});
}
