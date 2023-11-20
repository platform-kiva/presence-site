import { useState } from "react";
import { useElements, useStripe, PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { clearCart } from '../../../../store/cart/cart.action'
import { useDispatch } from "react-redux";

// styles
import { OrderFormForm, OrderFormContainer } from "./OrderForm.styles";

// components
import PrimaryBtn from "../../../../components/btns/primary-btn/PrimaryBtn";


export default function OrderForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const clearCartItems = () => {
      dispatch(clearCart())
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
        });
    
        if (paymentResult.error) {
          alert(paymentResult.error)
        } else {
          clearCartItems()
        }
    }

    return (
      <OrderFormContainer id="orderFormID">
        <h1>ORDER FORM</h1>
        <OrderFormForm onSubmit={paymentHandler}>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email here"
            required
          />
          <AddressElement options={{mode: 'shipping'}} />
          <PaymentElement />
          <PrimaryBtn label={"PLACE ORDER"}/>
        </OrderFormForm>
      </OrderFormContainer>
    )
}
