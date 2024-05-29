import { createSelector } from "reselect";

const selectSystemReducer = state => state.system;

export const selectSystemMode = createSelector(
    [selectSystemReducer],
    (system) => system.mode
);
export const selectExperienceWasStarted = createSelector(
    [selectSystemReducer],
    (system) => system.experienceWasStarted
);
export const selectUserSize = createSelector(
    [selectSystemReducer],
    (system) => system.userSize
);