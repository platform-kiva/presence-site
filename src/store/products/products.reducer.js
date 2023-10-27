import { PRODUCTS_ACTION_TYPES } from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
    productsArray: []
};

export const productsReducer = (state = PRODUCTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
            return {...state, productsArray: payload};
        default:
            return state;
    }
};