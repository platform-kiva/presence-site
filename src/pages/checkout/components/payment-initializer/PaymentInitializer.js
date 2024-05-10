import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../../../../utils/stripe/stripe.utils.js';
import { useSelector } from 'react-redux';
import { selectCartTotal, selectCartItems } from '../../../../store/cart/cart.selector.js';

// styles
import { PaymentInitializerContainer, CheckoutBtnContainer } from './PaymentInitializer.styles.js';

// components
import OrderForm from '../order-form/OrderForm.js';
import PrimaryBtn from '../../../../components/btns/primary-btn/PrimaryBtn.js';

export default function PaymentInitializer() {
    const [clientSecret, setClientSecret] = useState(null);
    const [showOrderForm, setShowOrderForm] = useState(false);
    const cartTotal = useSelector(selectCartTotal) * 100;
    const cartItems = useSelector(selectCartItems);

    const options = {
        clientSecret: clientSecret,
    };

    const fetchClientSecret = async () => {
        if (clientSecret) {
            return;
        }
        const cartDetails = cartItems.map(item => `${item.cartID}:${item.quantity}`).join(' --- ');
        try {
            const response = await fetch('https://us-central1-presence-9cced.cloudfunctions.net/createPaymentIntent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: cartTotal,
                    description: cartDetails
                })
            }).then((res) => res.json())

            const clientSecretTemp = `${response.clientSecret}`;   

            setClientSecret(clientSecretTemp)

        } catch (error) {
            // alert("ERR: " + error);
            return;
        }
    };

    const handleScroll = () => {
        const botElement = document.getElementById("orderFormID");
        if (botElement) {
            botElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleButtonClick = () => {
        if (!clientSecret) {
            fetchClientSecret();
            setShowOrderForm(true);
            handleScroll();
        } else {
            return;
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



    return (
        <PaymentInitializerContainer>
            <CheckoutBtnContainer>
                <div style={{ width: "50%" }} onClick={handleButtonClick}>
                    <PrimaryBtn label={"LOOKS GOOD!"} isActive={!clientSecret}/>
                </div>
            </CheckoutBtnContainer> 
            {clientSecret &&
                <Elements stripe={stripePromise} options={options}>
                    <OrderForm clientSecret={clientSecret} />
                </Elements>
            }
        </PaymentInitializerContainer>
    )
}