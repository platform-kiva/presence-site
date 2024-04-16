import { GRADIENTS_ACTION_TYPES } from "./gradient.types";

export const GRADIENTS_INITIAL_STATE = {
    status: null,
    displayedGradient: null,
    gradientA: null,
    gradientB: null
};

export const gradientsReducer = (state = GRADIENTS_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case GRADIENTS_ACTION_TYPES.SET_STATUS:
            return { ...state, status: payload }
        case GRADIENTS_ACTION_TYPES.SET_DISPLAYED_GRADIENT:
            return { ...state, displayedGradient: payload }
        case GRADIENTS_ACTION_TYPES.SET_DEFAULT_GRADIENT:
            return { ...state, gradientA: payload, gradientB: payload };
        case GRADIENTS_ACTION_TYPES.SET_GRADIENT_A:
            return { ...state, gradientA: payload };
        case GRADIENTS_ACTION_TYPES.SET_GRADIENT_B:
            return { ...state, gradientB: payload };
        default:
            return state;
    }
};