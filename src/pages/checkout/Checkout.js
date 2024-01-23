import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector'

// styles
import {
  GradientBG,
  CheckoutContainer,
  CartOverviewContainer
} from './Checkout.styles.js';

// components
import CartProductsView from '../../components/cart-products-view/CartProductsView.js'

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CartOverviewContainer>
        <CartProductsView items={cartItems} />
        <h2>cart total: ${cartTotal}</h2>
      </CartOverviewContainer>

      <Outlet />

      <GradientBG $cartItems={cartItems} $cartInd={0} />
    </CheckoutContainer>
  )
};