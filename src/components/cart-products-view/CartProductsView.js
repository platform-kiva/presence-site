// styles
import {
  CartItemDetails,
  CartItemsContainer,
  CartProductsViewContainer,
  ProductHolder,
  ShirtImgContainer
 } from './CartProductsView.styles.js';

// components
import ShirtImgDisplay from '../shirt-img-display/ShirtImgDisplay.js';

export default function CartProductsView({ items }) {

  return (
    <CartProductsViewContainer>
      <h2>REVIEW YOUR CART</h2>
      <CartItemsContainer>
        {items.map((item) => (
          <ProductHolder key={item.cartID}>
            <ShirtImgContainer>
              <ShirtImgDisplay product={item} />
            </ShirtImgContainer>
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
