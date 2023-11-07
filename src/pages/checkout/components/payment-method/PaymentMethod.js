import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../../../utils/stripe/stripe.utils';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../../../store/cart/cart.selector';

// styles
import './PaymentMethod.styles.scss'

// components
import OrderForm from '../order-form/OrderForm';

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
        <>
            {clientSecret ?
                <Elements stripe={stripePromise} options={options}>
                    <OrderForm clientSecret={clientSecret} />
                </Elements>
                :
                <div className='payment-method-container'>
                    
                    <div className='payment-method-col'>
                        <h1>EXPRESS PAYMENT</h1>
                        <div className='payment-method-options-container'>
                            <div className='express-payment-option-container'>
                                <h3>APPLE PAY</h3>
                            </div>
                            <div className='express-payment-option-container'>
                                <h3>GOOGLE PAY</h3>
                            </div>
                            <div className='express-payment-option-container'>
                                <h3>PAYPAL</h3>
                            </div>
                            <div className='express-payment-option-container'>
                                <h3>VENMO</h3>
                            </div>
                            <div className='express-payment-option-container'>
                                <h3>CASHAPP</h3>
                            </div>
                        </div>
                    </div>
                    <div className='payment-method-col'>
                        <h1>CARD PAYMENT</h1>
                        <div className='payment-method-options-container' onClick={() => fetchClientSecret()}>
                            <div className='card-payment-option-container'>
                                <h3>CARD</h3>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}