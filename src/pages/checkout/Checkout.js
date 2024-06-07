import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { selectCartItems, selectCartQuantity, selectCartTotal } from '../../store/cart/cart.selector.js';
import { selectCartSubtotal } from '../../store/cart/cart.selector.js'

// styles
import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  CartOverviewContainer,
  CostContainer,
  CostRowContainer
} from './Checkout.styles.js';

// components
import CheckoutHeader from './components/checkout-header/CheckoutHeader.js';
import CartProductsView from '../../components/cart-products-view/CartProductsView.js'
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartSubtotal = useSelector(selectCartSubtotal);
  const cartQuantity = useSelector(selectCartQuantity);
  const cartTotal = useSelector(selectCartTotal);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const taxCost = 0.01;
  const shippingCost = 4.88 + ((cartQuantity - 1) * 2.2);

  return (
    <CheckoutContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeader nav={"../cart"}/>
      </CheckoutHeaderContainer>
      <CartOverviewContainer>
        <CartProductsView items={cartItems} />
        <div style={{ width: "340px" }}>
          <ElementWrapper>
            <CostContainer>
              <CostRowContainer>
                <h3>subtotal:</h3>
                <h3>{formatter.format(cartSubtotal)}</h3>
              </CostRowContainer>
              <CostRowContainer>
                <h3>shipping:</h3>
                <h3>{formatter.format(shippingCost)}</h3>
              </CostRowContainer>
              <CostRowContainer>
                <h3>tax:</h3>
                <h3>{formatter.format(taxCost)}</h3>
              </CostRowContainer>
              <CostRowContainer style={{ marginTop: "20px", borderTop: "2px solid #FFFFFF"}}>
                <h2>total:</h2>
                <h2>{formatter.format(cartTotal)}</h2>
              </CostRowContainer>
            </CostContainer>
          </ElementWrapper>
        </div>
      </CartOverviewContainer>

      <Outlet />

    </CheckoutContainer>
  )
};