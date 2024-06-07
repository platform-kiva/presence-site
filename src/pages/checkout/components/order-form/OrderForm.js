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
            return_url: 'https://presencedesign.online/281-474-976-710-656/complete',
            payment_method_data: {
                billing_details: {
                    email: email,
                }
            },
          },
        })
  
        stripe.confirmCardPayment(clientSecret).then(result => {
          if (result.error) {
            // Extract and log detailed error information
            console.error('Payment error:', paymentResult.error);
            const errorMessage = paymentResult.error.message || 'An unknown error occurred';
            const errorType = paymentResult.error.type || 'No error type';
            const errorCode = paymentResult.error.code || 'No error code';
            const errorDeclineCode = paymentResult.error.decline_code || 'No decline code';
        
            console.error(`Error type: ${errorType}`);
            console.error(`Error code: ${errorCode}`);
            console.error(`Decline code: ${errorDeclineCode}`);
            
            // Display a detailed error message to the user
            alert(`ERROR: ${errorMessage}\nType: ${errorType}\nCode: ${errorCode}\nDecline Code: ${errorDeclineCode}`);
          } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
            // The payment was successful!
            // console.log('Payment succeeded:', result.paymentIntent);
            // alert("Payment successful!");
            // Optionally, redirect the user or update the UI to reflect successful payment
          } else {
            // Handle other statuses or unexpected results
            console.warn('Unexpected payment result:', result);
            alert("Unexpected payment result");
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