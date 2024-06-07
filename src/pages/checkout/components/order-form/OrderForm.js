import { useState } from "react";
import { useElements, useStripe, PaymentElement, AddressElement } from "@stripe/react-stripe-js";

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
  CheckoutBtn,
  CheckoutMessageContainer
} from "./OrderForm.styles.js";

export default function OrderForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');

    const paymentHandler = async (e) => {
        e.preventDefault();
    
        if(!stripe || !elements) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if (submitError) {
          console.log("submitError: ", submitError.message);
          alert(submitError.message);
          return;
        }
    
        const paymentResult = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            // return_url: 'https://presencedesign.online/281-474-976-710-656/complete',
            return_url: 'http://localhost:8888/281-474-976-710-656/complete',
            payment_method_data: {
                billing_details: {
                    email: email,
                }
            },
          },
        })
  
        stripe.confirmCardPayment(clientSecret).then(result => {
          if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
          } else {
            alert("ERROR: " + paymentResult.error);
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
            <CheckoutMessageContainer>
              <h3>By clicking 'Place Order' you acknowledge that ALL SALES ARE FINAL.</h3>
              <h3>If you are unsatisfied with your experience, please shoot us a DM on Instagram or Tiktok at @presence.exp</h3>
              <h3>NOTE: Purchased color combinations will act as an entry point to future presence design</h3>
            </CheckoutMessageContainer>
            
            <CheckoutBtn>
              Place Order
            </CheckoutBtn>
          </OrderFormForm>
        </FormContainer>
      </OrderFormContainer>
    )
};