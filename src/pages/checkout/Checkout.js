import { useSelector } from 'react-redux/es/hooks/useSelector';

import { selectCartItems } from '../../store/cart/cart.selector';
import { selectProducts } from '../../store/products/products.selector';

// styles
import {GradientBG, CheckoutContainer} from './Checkout.styles.js';

// components
import CheckoutForm from './components/checkout-form/CheckoutForm';
import CheckoutProductsView from './components/checkout-products-view/CheckoutProductsView';

export default function Checkout() {
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutContainer>
        <CheckoutForm />
        <CheckoutProductsView />
        <GradientBG $products={products} $productInd={cartItems[0].id} />
    </CheckoutContainer>
  )
};