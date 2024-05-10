import { combineReducers } from "redux"

// sub-reducers
import { cartReducer } from "./cart/cart.reducer.js";
import { productsReducer } from "./products/products.reducer.js";
import { gradientsReducer } from "./gradients/gradient.reducer.js";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    gradients: gradientsReducer
})