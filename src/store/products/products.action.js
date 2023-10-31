import { PRODUCTS_ACTION_TYPES } from "./products.types"

export const setProductsArray = (productsArray) => ({type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS, payload: productsArray});