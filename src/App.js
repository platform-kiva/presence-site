import { BrowserRouter, Route, Routes } from 'react-router-dom';

// assets
import cursorIcon from './assets/icons/cursor.png';

// pages
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Home from './pages/home/Home';
import PaymentMethod from './pages/checkout/components/payment-method/PaymentMethod';
import PreLoader from "./pages/pre-loader/PreLoader";
import ProductContainer from './pages/product-container/ProductContainer';
import OrderComplete from './pages/order-complete/OrderComplete';
import OrderForm from './pages/checkout/components/order-form/OrderForm';

function App() {
  return (
    <div style={{ cursor: `url(${cursorIcon}) 15 15, auto`}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PreLoader />} />
          <Route path="/home" element={<Home />}>
            <Route path="" element={<ProductContainer />} />
          </Route> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/complete" element={<OrderComplete />} />
          <Route path="/checkout" element={<Checkout />}>
              <Route path="payment-method" element={<PaymentMethod />} />
              <Route path="order-form" element={<OrderForm />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;