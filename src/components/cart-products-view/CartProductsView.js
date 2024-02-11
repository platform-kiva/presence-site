// styles
import {
  CartItemDetails,
  CartItemsContainer,
  CartProductsViewContainer,
  ProductHolder,
 } from './CartProductsView.styles.js';

// components
import CartItem from '../../pages/cart/cart-item/CartItem';
import ShirtDisplay from '../shirt-display/ShirtDisplay'

export default function CartProductsView({ items }) {

  return (
    <CartProductsViewContainer>
      <h2>REVIEW YOUR CART</h2>
      <CartItemsContainer>
        {items.map((item) => (
          <ProductHolder key={item.cartID}>
            <ShirtDisplay product={item} />
            <CartItemDetails>
              <h3>SIZE: {item.size}</h3>
              <h3>QUANTITY: {item.quantity}</h3>
            </CartItemDetails>
        </ProductHolder>
        ))}
      </CartItemsContainer>
    </CartProductsViewContainer>
  )
}
