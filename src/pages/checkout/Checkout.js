import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectProducts } from '../../store/products/products.selector';

// styles
import {GradientBG, CheckoutContainer} from './Checkout.styles.js';

// components
import CheckoutProductsView from './components/checkout-products-view/CheckoutProductsView';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  return (
    <CheckoutContainer>
        <Outlet />
        <CheckoutProductsView />
        <GradientBG $products={products} $productInd={cartItems[0].id} />
    </CheckoutContainer>
  )
};