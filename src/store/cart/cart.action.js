import { CART_ACTION_TYPES } from "./cart.types.js";

const addCartItem = (cartItems, productToAdd, size) => {
    const baseCartID = productToAdd.id + " (" + size + ")";
    
    // Check if there is any item with the same baseCartID but different indices
    const existingItems = cartItems.filter(
        (item) => item.cartID.startsWith(baseCartID)
    );

    // If there are existing items with the same baseCartID
    if (existingItems.length > 0) {
        // Find the specific item with the same exact cartID
        const itemExists = existingItems.find(
            (item) => item.cartID === productToAdd.cartID
        );

        // If the exact item exists, update its quantity
        if (itemExists) {
            return cartItems.map((cartItem) => 
                cartItem.cartID === productToAdd.cartID 
                    ? {...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
            );
        }

        // Otherwise, add a new item with a new unique cartID
        const maxIndex = Math.max(...existingItems.map(item => parseInt(item.cartID.split('-').pop() || 0))) + 1;
        const newCartID = baseCartID + "-" + maxIndex;

        return [...cartItems, { ...productToAdd, quantity: 1, size: size, cartID: newCartID }];
    }

    // If no items with the same baseCartID exist, add the item with initial index 1
    const newCartID = baseCartID + "-1";
    return [...cartItems, { ...productToAdd, quantity: 1, size: size, cartID: newCartID }];

    
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // const existingCartItem = cartItems.find(
    //     (item) => item.cartID === cartItemToRemove.cartID
    // )
    // if (existingCartItem.quantity === 1) {
    //     return cartItems.filter(cartItem => cartItem.cartID !== cartItemToRemove.cartID)
    // }
    // return cartItems.map(cartItem =>
    //     cartItem.cartID === cartItemToRemove.cartID 
    //         ? {...cartItem, quantity: cartItem.quantity - 1}
    //         : cartItem
    // )
    const existingCartItem = cartItems.find(
        (item) => item.cartID === cartItemToRemove.cartID
    );
    
    if (!existingCartItem) {
        return cartItems; // If the item is not found, return the cart items unchanged
    }

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.cartID !== cartItemToRemove.cartID);
    }

    return cartItems.map(cartItem =>
        cartItem.cartID === cartItemToRemove.cartID 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
}

const updateItemSize = (cartItems, cartItemToUpdate, inc) => {
    const sizes = ['S','M','L','XL','2XL', '3XL', '4XL'];
    const sizesKey = { "S": 0, "M": 1, "L": 2, "XL": 3, "2XL": 4, "3XL": 5, "4XL": 6 };

    const currSizeKey = sizesKey[cartItemToUpdate.size];
    let newSizeKey = null;

    if (inc === 1) {
        if (currSizeKey === sizes.length - 1) {
            newSizeKey = 0
        } else {
            newSizeKey = currSizeKey + 1
        }
    } else if (inc === -1) {
        if (currSizeKey === 0) {
            newSizeKey = sizes.length - 1
        } else {
            newSizeKey = currSizeKey - 1
        }
    } else {
        alert("Error updating size")
    }

    const newSize = sizes[newSizeKey];

    // const existingCartItem = cartItems.find(
    //     (item) => item.cartID === cartItemToUpdate.id + " (" + newSize + ")"
    // )

    // if (existingCartItem) {
    //     alert(existingCartItem.quantity)
        
    // } else {
    //     return cartItems.map(cartItem =>
    //         cartItem.cartID === cartItemToUpdate.cartID 
    //             ? {...cartItem, size: newSize, cartID: cartItem.id + " (" + newSize + ")"}
    //             : cartItem
    //     )
    // }

    // Find max index of existing items with the same id and size
    const sameItems = cartItems.filter(item => item.id === cartItemToUpdate.id && item.size === newSize);
    const maxIndex = sameItems.length > 0 ? Math.max(...sameItems.map(item => parseInt(item.cartID.split('-').pop()))) : 0;

    // Generate new cartID
    const newCartID = cartItemToUpdate.id + " (" + newSize + ")-" + (maxIndex + 1);

    return cartItems.map(cartItem =>
        cartItem.cartID === cartItemToUpdate.cartID
            ? { ...cartItem, size: newSize, cartID: newCartID }
            : cartItem
    )

}

export const addItemToCart = (cartItems, productToAdd, size) => {
    const newCartItems = addCartItem(cartItems, productToAdd, size);
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const increaseItemSize = (cartItems, cartItemToUpdate) => {
    const newCartItems = updateItemSize(cartItems, cartItemToUpdate, 1)
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const decreaseItemSize = (cartItems, cartItemToUpdate) => {
    const newCartItems = updateItemSize(cartItems, cartItemToUpdate, -1)
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
}

export const clearCart = () => {
    return ({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: [] });
}
export const setCartIsOpen = (status) => {
    return ({ type: CART_ACTION_TYPES.SET_CART_IS_OPEN, payload: status })
}
