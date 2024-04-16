import { useState } from 'react';

// styles
import { 
  HomeContainer,
  HeaderContainer
} from './Home.styles.js';

// components
import Cart from '../cart/Cart.js';
import Header from '../../components/header/Header.js';
import SocialsView from '../../components/socials-view/SocialsView.js';
import GradientControlsContainer from '../../components/gradient-controls/GradientControls.js';

export default function Home() {
  const [cartViewIsDisplayed, setCartViewIsDisplayed] = useState(false);
  const [socialsViewIsDisplayed,setSocialsViewIsDisplayed] = useState(false);

  return (
    <HomeContainer>
      <HeaderContainer
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 1]
          }}
      >
          <Header
              cartViewSetter={setCartViewIsDisplayed}
              cartViewStatus={cartViewIsDisplayed}
              socialsViewSetter={setSocialsViewIsDisplayed}
              socialsViewStatus={socialsViewIsDisplayed}
          />
      </HeaderContainer>
      {socialsViewIsDisplayed &&
        <SocialsView />
      }
      {cartViewIsDisplayed &&
          <Cart />
      }
      {!cartViewIsDisplayed && !socialsViewIsDisplayed &&
        <GradientControlsContainer />
      }
    </HomeContainer>
  )
};