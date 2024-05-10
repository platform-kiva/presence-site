import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartIsOpen } from '../../store/cart/cart.selector.js';
import { setAddToCartStatus } from '../../store/gradients/gradient.action.js';

// styles
import { 
  HomeContainer,
  HeaderContainer
} from './Home.styles.js';

// components
import Header from '../../components/header/Header.js';
import SocialsView from '../../components/socials-view/SocialsView.js';
import GiftShop from '../gift-shop/GiftShop.js';
import GradientControls from '../../components/gradient-controls/GradientControls.js';
import { setCartIsOpen } from '../../store/cart/cart.action.js';


export default function Home() {
  const cartIsOpen = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();
  const [giftShopViewIsDisplayed, setGiftShopViewIsDisplayed] = useState(false);
  const [socialsViewIsDisplayed, setSocialsViewIsDisplayed] = useState(false);

  useEffect(() => {
    if (cartIsOpen) {
      setGiftShopViewIsDisplayed(true);
      dispatch(setCartIsOpen(false));
    }
  }, [dispatch, cartIsOpen])
  
  useEffect(() => {
    if (!giftShopViewIsDisplayed) {
      dispatch(setAddToCartStatus(false));
    }
  }, [giftShopViewIsDisplayed, dispatch ]);

  return (
    <HomeContainer>
      <HeaderContainer>
          <Header
              cartViewSetter={setGiftShopViewIsDisplayed} // update from 'cart'
              cartViewStatus={giftShopViewIsDisplayed}
              socialsViewSetter={setSocialsViewIsDisplayed}
              socialsViewStatus={socialsViewIsDisplayed}
          />
      </HeaderContainer>
      {socialsViewIsDisplayed &&
        <SocialsView />
      }
      {giftShopViewIsDisplayed &&
          <GiftShop />
      }
      {!giftShopViewIsDisplayed && !socialsViewIsDisplayed &&
        <GradientControls />
      }
    </HomeContainer>
  )
};