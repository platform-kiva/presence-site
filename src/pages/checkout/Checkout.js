// styles
import './Checkout.styles.scss';

// components
import CheckoutForm from './components/checkout-form/CheckoutForm';
import CheckoutProductsView from './components/checkout-products-view/CheckoutProductsView';

export default function Checkout() {
  return (
    <div className='checkout-container'>
        <CheckoutForm />
        <CheckoutProductsView />
    </div>
  )
};