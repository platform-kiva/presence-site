import { SYSTEM_ACTION_TYPES } from "./system.types.js";

export const setSystemMode = (mode) => {
    return ({ type: SYSTEM_ACTION_TYPES.SET_SYSTEM_MODE, payload: mode })
}