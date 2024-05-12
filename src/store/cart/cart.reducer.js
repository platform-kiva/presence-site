import { CART_ACTION_TYPES } from "./cart.types.js";

export const CART_INITIAL_STATE = {
    cartItems: [],
    cartIsOpen: false
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, cartItems: payload };
        case CART_ACTION_TYPES.SET_CART_IS_OPEN:
            return { ...state, cartIsOpen: payload }
        default:
            return state;
    }
};