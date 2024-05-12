import { SYSTEM_ACTION_TYPES } from "./system.types.js";

export const SYSTEM_INITIAL_STATE = {
    mode: "light"
};

export const systemReducer = (state = SYSTEM_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SYSTEM_ACTION_TYPES.SET_SYSTEM_MODE:
            return { ...state, mode: payload };
        default:
            return state;
    }
};