import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectProducts } from '../../store/products/products.selector';

// styles
import {
  BotNavBtnContainer,
  GradientBG,
  CheckoutContainer
} from './Checkout.styles.js';

// components
import GridProductsView from '../../components/grid-products-view/GridProductsView.js';
import NavBtn from '../../components/btns/nav-btn/NavBtn.js'

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  return (
    <CheckoutContainer>
        <Outlet />
        <GridProductsView items={cartItems} />
        <BotNavBtnContainer>
          <NavBtn direction={"down"} btnIcon="card" link={'/cart'}/>
        </BotNavBtnContainer>
        <GradientBG $products={products} $productInd={cartItems[0].id} />
    </CheckoutContainer>
  )
};