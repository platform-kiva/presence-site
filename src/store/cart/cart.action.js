import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd, size) => {
    const sizeID = productToAdd.id + size
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
        return cartItems.filter(cartItem => cartItem.sizeID !== cartItemToRemove.sizeID)
    }
    return cartItems.map(cartItem =>
        cartItem.sizeID === cartItemToRemove.sizeID 
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
