// styles
import {
  CartItemDetails,
  CartItemsContainer,
  CartProductsViewContainer,
  ProductHolder,
 } from './CartProductsView.styles.js';

// components
import CartItem from '../../pages/cart/cart-item/CartItem';
import CustomShirtDisplay from '../custom-shirt-display/CustomShirtDisplay'


export default function CartProductsView({ items }) {

  return (
    <CartProductsViewContainer>
      <h2>OVERVIEW</h2>
      <CartItemsContainer>
        {items.map((item) => {
            if (item.imgURL === null) {
              return (
                <ProductHolder key={item.cartID}>
                  <CustomShirtDisplay product={item} />
                  <CartItemDetails>
                    <h3>SIZE: {item.size}</h3>
                    <h3>QUANTITY: {item.quantity}</h3>
                  </CartItemDetails>
                </ProductHolder>
              );
            } else {
              return (
                <ProductHolder key={item.cartID}>
                  <CartItem cartItem={item}/>
                  <CartItemDetails>
                    <h3>SIZE: {item.size}</h3>
                    <h3>QUANTITY: {item.quantity}</h3>
                  </CartItemDetails>
                </ProductHolder>
              );
            }
          }
        )}
      </CartItemsContainer>
    </CartProductsViewContainer>
  )
}
