import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

// styles
import { AppContainer } from './App.styles.js';

// pages
import Cart from './pages/cart/Cart.js';
import Checkout from './pages/checkout/Checkout.js';
import Home from './pages/home/Home.js';
import PaymentInitializer from './pages/checkout/components/payment-initializer/PaymentInitializer.js';
import PreLoader from "./pages/pre-loader/PreLoader.js";
import OrderComplete from './pages/order-complete/OrderComplete.js';
import SiteContainer from './pages/site-container/SiteContainer.js';
import LandingPage from './pages/landing-page/LandingPage.js';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
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
          {/* Set LandingPage as the default route at the root */}
          <Route path="/" element={<LandingPage />} />

          {/* Set SiteContainer to be accessed at /281-474-976-710-656 */}
          <Route path="/281-474-976-710-656" element={<SiteContainer />}>
            {/* Nested routes under /281-474-976-710-656 */}
            <Route index element={<PreLoader />} />  {/* Use index for the default sub-route */}
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="complete" element={<OrderComplete />} />
            <Route path="checkout" element={<Checkout />}>
              {/* Nested route under /checkout */}
              <Route index element={<PaymentInitializer />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;