import { createSelector } from "reselect";

const selectProductsReducer = (state) => state.products;

export const selectProducts = createSelector(
    [selectProductsReducer],
    (productsSlice) => productsSlice.products
);