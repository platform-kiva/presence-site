import { useEffect } from "react";
import { createContext, useReducer } from "react";

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

export const CartContext = createContext({
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    addItemToCart: () => {},
    removeItemFromCart: () => {}
})

const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
};

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`Unhandled type: ${type} in cartReducer`);
    }
};

export const CartProvider = ({ children }) => {
    const [{ cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
    
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
    
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        });
    };

    useEffect(() => {
        console.log(cartItems)
    },[cartItems])

    const addItemToCart = (productToAdd, size) => {
        const newCartItems = addCartItem(cartItems, productToAdd, size);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const value = {
        cartCount,
        cartItems,
        cartTotal,
        addItemToCart,
        removeItemFromCart
    };

    return (
        <CartContext.Provider value={value}>{ children }</CartContext.Provider>
    )
};