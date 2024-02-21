import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()

    const options = {
        clientSecret: clientSecret,
    };

    const handleScroll = () => {
        const botElement = document.getElementById("orderFormID");
        if (botElement) {
            botElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleButtonClick = (val) => {
        if (val === 1) {
            setShowOrderForm(true);
            handleScroll()
        } else if (val === -1) {
            navigate("/home")
        }
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
        const cartDetails = cartItems.map(item => `${item.cartID}:${item.quantity}`).join(' --- ');
        try {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: cartTotal,
                    description: cartDetails
                })
            }).then((res) => res.json())
            const clientSecretTemp = `${response.paymentIntent.client_secret}`;
            setClientSecret(clientSecretTemp)
        } catch (error) {
            alert('Stripe is currently disabled while in test mode');
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
                    <div onClick={() => handleButtonClick(1)}>
                        <PrimaryBtn label={"GO TO CHECKOUT"}/>
                    </div>
                    <h3 className='back-btn' onClick={() => handleButtonClick(-1)}>BACK</h3>
                </CheckoutBtnContainer> 
            }
        </PaymentInitializerContainer>
    )
}