import { BrowserRouter, Route, Routes } from 'react-router-dom';

// assets
import cursorIcon from './assets/icons/cursor.png'

// components
import Cart from './pages/cart/Cart';
import Home from "./pages/home/Home";
import PreLoader from "./pages/pre-loader/PreLoader";

function App() {
  return (
    <div style={{ cursor: `url(${cursorIcon}) 15 15, auto`}}>
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<PreLoader />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
