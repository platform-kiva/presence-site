import { SYSTEM_ACTION_TYPES } from "./system.types.js";

export const SYSTEM_INITIAL_STATE = {
    mode: "light",
    experienceWasStarted: false
};

export const systemReducer = (state = SYSTEM_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SYSTEM_ACTION_TYPES.SET_SYSTEM_MODE:
            return { ...state, mode: payload };
        case SYSTEM_ACTION_TYPES.SET_EXPERIENCE_WAS_STARTED:
            return { ...state, experienceWasStarted: payload };
        default:
            return state;
    }
};