import { combineReducers } from "redux";

// sub-reducers
import { cartReducer } from "./cart/cart.reducer";
import { productsReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})