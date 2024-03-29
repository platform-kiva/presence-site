import { BrowserRouter, Route, Routes } from 'react-router-dom';

// styles
import { AppContainer } from './App.styles.js'

// pages
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import PaymentInitializer from './pages/checkout/components/payment-initializer/PaymentInitializer';
import PreLoader from "./pages/pre-loader/PreLoader";
import ProductContainer from './pages/product-container/ProductContainer';
import OrderComplete from './pages/order-complete/OrderComplete';
import SiteContainer from './pages/site-container/SiteContainer.js';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SiteContainer />}>  
            <Route path="" element={<PreLoader />} />
            <Route path="/home" element={<Home />}>
              <Route path="" element={<ProductContainer />} />
              <Route path="cart" element={<Cart />} />
            </Route> 
            <Route path="/complete" element={<OrderComplete />} />
            <Route path="/checkout" element={<Checkout />}>
                <Route path="" element={<PaymentInitializer />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;