import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../../../utils/stripe/stripe.utils';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../../../store/cart/cart.selector';

// styles
import { PaymentInitializerContainer, CheckoutBtnContainer } from './PaymentInitializer.styles.js';

// components
import OrderForm from '../order-form/OrderForm';
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn';

export default function PaymentInitializer() {
    const [clientSecret, setClientSecret] = useState(null);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const cartTotal = useSelector(selectCartTotal) * 100;
    const cartItems = useSelector(selectCartItems);

    const options = {
        clientSecret: clientSecret,
    };

    const handleButtonClick = () => {
        setShowOrderForm(true); // This triggers the component to render
      };

    useEffect(() => {
    if (showOrderForm) {
        setTimeout(() => {
            const element = document.getElementById("orderFormID");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 1000);
    }
    }, [showOrderForm]);

    const fetchClientSecret = async () => {
        try {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: cartTotal,
                    description: `${cartItems}`
                })
            }).then((res) => res.json())
            const clientSecretTemp = `${response.paymentIntent.client_secret}`;
            setClientSecret(clientSecretTemp)
        } catch (error) {
            alert('Error fetching client secret:', error);
        }
    };

    return (
        <PaymentInitializerContainer>
            {clientSecret ?
                <Elements stripe={stripePromise} options={options}>
                    <OrderForm clientSecret={clientSecret} />
                </Elements>
                :
                <CheckoutBtnContainer onClick={fetchClientSecret}>
                    <div onClick={() => handleButtonClick()}>
                        <PrimaryBtn label={"GO TO CHECKOUT"}/>
                    </div>
                </CheckoutBtnContainer> 
            }
        </PaymentInitializerContainer>
    )
}