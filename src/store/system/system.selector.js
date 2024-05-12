import { createSelector } from "reselect";

const selectSystemReducer = state => state.system;

export const selectSystemMode = createSelector(
    [selectSystemReducer],
    (system) => system.mode
);