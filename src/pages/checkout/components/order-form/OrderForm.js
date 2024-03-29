import { useState } from "react";
import { useElements, useStripe, PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { clearCart } from '../../../../store/cart/cart.action'
import { useDispatch } from "react-redux";

// assets
import stripeLogo from '../../../../assets/png/stripe-logo.png';

// styles
import {
  OrderFormForm,
  FormContainer,
  EmailInput,
  OrderFormContainer,
  EmailInputContainer,
  EmailLabel,
  StripeHeader,
  CheckoutBtn
} from "./OrderForm.styles";

export default function OrderForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const clearCartItems = () => {
      dispatch(clearCart());
    }

    const paymentHandler = async (e) => {
        e.preventDefault();
    
        if(!stripe || !elements) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if (submitError) {
          alert(submitError);
          return;
        }
    
        const paymentResult = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: 'http://localhost:8888/complete',
            payment_method_data: {
                billing_details: {
                    email: email,
                }
            },
          },
        })
  
        stripe.confirmCardPayment(clientSecret).then(result => {
          if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
            clearCartItems()
            // handle order completion or other tasks here
          } else {
            alert(paymentResult.error)
          }
        });
      }

    return (
      <OrderFormContainer id="orderFormID">
        <FormContainer> 
          <StripeHeader>
            <h3>Payments processed with</h3>
            <img src={stripeLogo} alt="Stripe logo" />
          </StripeHeader>
          
          <OrderFormForm onSubmit={paymentHandler}>
            <EmailInputContainer>
              <EmailLabel>Email</EmailLabel>
              <EmailInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </EmailInputContainer>
            <AddressElement options={{mode: 'shipping'}} />
            <PaymentElement />
            <CheckoutBtn>
              Place Order
            </CheckoutBtn>
          </OrderFormForm>
        </FormContainer>
      </OrderFormContainer>
    )
}
