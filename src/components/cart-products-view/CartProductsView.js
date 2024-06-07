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
import ElementWrapper from '../element-wrapper/ElementWrapper.js';

export default function CartProductsView({ items }) {

  return (
    <CartProductsViewContainer>
      <CartItemsContainer>
      {items.map((item, index) => (
        <div style={{ width: "300px" }}>
          <ElementWrapper key={item.cartID} delay={0.2 + index * 0.1}>
            <ProductHolder>
              <ShirtImgContainer>
                <ShirtImgDisplay setGradient={item.gradient} />
              </ShirtImgContainer>
              <CartItemDetails>
                <h3>SIZE: {item.size}</h3>
                <h3>QUANTITY: {item.quantity}</h3>
              </CartItemDetails>
            </ProductHolder>
          </ElementWrapper>
        </div>
      ))}
      </CartItemsContainer>
    </CartProductsViewContainer>
  )
}
