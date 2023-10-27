import { BrowserRouter, Route, Routes } from 'react-router-dom';

// assets
import cursorIcon from './assets/icons/cursor.png'

// components
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import ProductContainer from './pages/product-container/ProductContainer'
import PreLoader from "./pages/pre-loader/PreLoader";
import OrderComplete from './pages/order-complete/OrderComplete';

function App() {
  return (
    <div style={{ cursor: `url(${cursorIcon}) 15 15, auto`}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="loading" element={<PreLoader />} />
            <Route path="" element={<ProductContainer />} />
            <Route path="complete" element={<OrderComplete />} />
            <Route path="cart" element={<Cart />} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;