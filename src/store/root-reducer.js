import { combineReducers } from "redux";

// sub-reducers
import { productsReducer } from "./products/products.reducer";

export const rootReducer = combineReducers({
    products: productsReducer
})