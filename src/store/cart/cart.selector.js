import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    )
);
export const selectCartSubtotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
    )
);
export const selectCartQuantity = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
    )
);
export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => {
        const itemsCost = cart.cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity * cartItem.price),
            0
        );
        const totalItems = cart.cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const shippingAndTaxCost = 4.89 + ((totalItems - 1) * 2.20);
        console.log(itemsCost + shippingAndTaxCost);
        return itemsCost + shippingAndTaxCost;
    }
);
export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.cartIsOpen
)