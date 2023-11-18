import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectProducts } from '../../store/products/products.selector';

// styles
import {
  BotNavBtnContainer,
  GradientBG,
  CheckoutContainer,
  CartOverviewContainer
} from './Checkout.styles.js';

// components
import CartProductsView from '../../components/cart-products-view/CartProductsView.js'
import NavBtn from '../../components/btns/nav-btn/NavBtn.js';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  return (
    <CheckoutContainer>
      <CartOverviewContainer>
        <CartProductsView items={cartItems} />
      </CartOverviewContainer>

      <Outlet />

      <BotNavBtnContainer>
        <NavBtn direction={"down"} btnIcon="cart" link={'/cart'}/>
      </BotNavBtnContainer>
      <GradientBG $products={products} $productInd={cartItems[0].id} />
    </CheckoutContainer>
  )
};