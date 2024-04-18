import { GRADIENTS_ACTION_TYPES } from "./gradient.types";
import { generateRgbString } from "../../utils/general/general.utils";

export const setStatus = (status) => {
    return ({ type: GRADIENTS_ACTION_TYPES.SET_STATUS, payload: !status });
}
export const setAddToCartStatus = (status) => {
    return ({ type: GRADIENTS_ACTION_TYPES.SET_ADD_TO_CART_STATUS, payload: !status })
}
export const setDisplayedGradient = (gradientType) => {
    return ({ type: GRADIENTS_ACTION_TYPES.SET_DISPLAYED_GRADIENT, payload: gradientType });
}
export const setDefaultGradient = (gradient) => {
    return ({type: GRADIENTS_ACTION_TYPES.SET_DEFAULT_GRADIENT, payload: gradient }); 
}
export const setGradient = (gradientType) => {
    const rgb1 = generateRgbString();
    const rgb2 = generateRgbString();
    const newGradient = [rgb1, rgb2];
    if (gradientType === "A") {
        return ({type: GRADIENTS_ACTION_TYPES.SET_GRADIENT_A, payload: newGradient });
    } else if (gradientType === "B") {
        return ({type: GRADIENTS_ACTION_TYPES.SET_GRADIENT_B, payload: newGradient });
    } else {
        alert('error setting gradient');
    }
}