import { SYSTEM_ACTION_TYPES } from "./system.types.js";

export const setSystemMode = (mode) => {
    return ({ type: SYSTEM_ACTION_TYPES.SET_SYSTEM_MODE, payload: mode })
}
export const setExperienceWasStarted = () => {
    return ({ type: SYSTEM_ACTION_TYPES.SET_EXPERIENCE_WAS_STARTED, payload: true })
}
export const setUserSize = (unit) => {
    return ({ type: SYSTEM_ACTION_TYPES.SET_USER_SIZE, payload: unit})
}