import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../../../utils/stripe/stripe.utils';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../../../store/cart/cart.selector';

// styles
import './PaymentMethod.styles.scss'

// components
import OrderForm from '../order-form/OrderForm';
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn';

export default function PaymentMethod() {
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
        <div className='payment-method-container'>
            {clientSecret ?
                <Elements stripe={stripePromise} options={options}>
                    <OrderForm clientSecret={clientSecret} />
                </Elements>
                :
                <div className='checkout-btn-container' onClick={() => fetchClientSecret()}>
                    <PrimaryBtn label={"GO TO CHECKOUT"}/>
                </div> 
            }
        </div>
    )
}