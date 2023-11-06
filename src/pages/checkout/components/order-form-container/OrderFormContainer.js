import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../../../utils/stripe/stripe.utils';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../../../store/cart/cart.selector';

// styles
import './OrderFormContainer.styles.scss'

// components
import OrderForm from './components/OrderForm';

export default function OrderFormContainer() {
  const [clientSecret, setClientSecret] = useState(null);
  const cartTotal = useSelector(selectCartTotal) * 100;

  const options = {
    clientSecret: clientSecret,
  };

  const fetchClientSecret = async () => {
    try {
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: cartTotal })
      }).then((res) => res.json())
      const clientSecretTemp = `${response.paymentIntent.client_secret}`;
      console.log(clientSecretTemp)
      setClientSecret(clientSecretTemp)
    } catch (error) {
      console.error('Error fetching client secret:', error);
    }
  };

  return (
    <div className='order-form-container'>
      <button onClick={() => fetchClientSecret()}>START</button>
      {clientSecret !== null &&
        <Elements stripe={stripePromise} options={options}>
          <h1>ORDER FORM</h1>
          <OrderForm clientSecret={clientSecret}/>      
        </Elements>
      }
    </div>
  )
}
