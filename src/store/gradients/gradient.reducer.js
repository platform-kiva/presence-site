import { GRADIENTS_ACTION_TYPES } from "./gradient.types";

export const GRADIENTS_INITIAL_STATE = {
    status: null,
    addToCartStatus: false,
    displayedGradient: null,
    gradientA: null,
    gradientB: null,
    currGradient: null,
};

export const gradientsReducer = (state = GRADIENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GRADIENTS_ACTION_TYPES.SET_STATUS:
            return { ...state, status: payload }
        case GRADIENTS_ACTION_TYPES.SET_ADD_TO_CART_STATUS:
            return { ...state, addToCartStatus: payload }
        case GRADIENTS_ACTION_TYPES.SET_DISPLAYED_GRADIENT:
            return { ...state, displayedGradient: payload }
        case GRADIENTS_ACTION_TYPES.SET_DEFAULT_GRADIENT:
            return { ...state, gradientA: payload, gradientB: payload, currGradient: payload };
        case GRADIENTS_ACTION_TYPES.SET_GRADIENT_A:
            return { ...state, gradientA: payload, currGradient: payload };
        case GRADIENTS_ACTION_TYPES.SET_GRADIENT_B:
            return { ...state, gradientB: payload, currGradient: payload };
        default:
            return state;
    }
};