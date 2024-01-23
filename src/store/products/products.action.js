import { PRODUCTS_ACTION_TYPES } from "./products.types"
import { getProductsAndDocuments } from "../../utils/firebase/firebase.utils"

export const fetchProductsStart = () => (
    { type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START }
);

export const fetchProductsSuccess = (productsArray) => (
    { type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, payload: productsArray }
);

export const fetchProductsFailed = (error) => (
    { type: PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, payload: error }
);

export const fetchProductsAsync = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
        const products = await getProductsAndDocuments();
        dispatch(fetchProductsSuccess(products));
    } catch (error) {
        dispatch(fetchProductsFailed(error));
    };
};