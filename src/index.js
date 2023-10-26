import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Providers
import { CartProvider } from './contexts/cart-context/CartContext'
import { ProductsProvider } from './contexts/products-context/ProductsContext'
import { ColorsProvider } from './contexts/colors-context/ColorsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorsProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </ColorsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
