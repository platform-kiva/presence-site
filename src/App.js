import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// styles
import { AppContainer } from './App.styles.js'

// pages
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import PaymentInitializer from './pages/checkout/components/payment-initializer/PaymentInitializer';
import PreLoader from "./pages/pre-loader/PreLoader";
import OrderComplete from './pages/order-complete/OrderComplete';
import SiteContainer from './pages/site-container/SiteContainer.js';
import GradientBG from './components/gradient-bg/GradientBG.js';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("scrolled to top")
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<SiteContainer />}>  
            <Route path="" element={<PreLoader />} />
            <Route path="/home" element={<Home />}>
              {/* <Route path="" element={<ProductContainer />} /> */}
              <Route path="cart" element={<Cart />} />
            </Route> 
            <Route path="/complete" element={<OrderComplete />} />
            <Route path="/checkout" element={<Checkout />}>
                <Route path="" element={<PaymentInitializer />} />
            </Route>
            
            <Route path="/gradient" element={<GradientBG />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;