import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Providers
import { CartProvider } from './contexts/cart-context/CartContext'
import { ProductsProvider } from './contexts/products-context/ProductsContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
