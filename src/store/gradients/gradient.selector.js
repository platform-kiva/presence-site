import { createSelector } from "reselect";

const selectGradientsReducer = state => state.gradients;

export const selectStatus = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.status
);
export const selectAddToCartStatus = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.addToCartStatus
)
export const selectDisplayedGradient = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.displayedGradient
);
export const selectGradientA = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.gradientA
);
export const selectGradientB = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.gradientB
);
export const selectCurrGradient = createSelector(
    [selectGradientsReducer],
    (gradients) => gradients.currGradient
)