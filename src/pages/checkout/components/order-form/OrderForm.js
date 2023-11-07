import { useState } from "react";
import { useElements, useStripe, PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { clearCart } from '../../../../store/cart/cart.action'
import { useDispatch } from "react-redux";

// styles
import './OrderForm.styles.scss';

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
        console.log("ran paymentHandler")
        e.preventDefault();
        console.log("default prevented")
    
        if(!stripe || !elements) {
            console.log("no stripe or element")
            return;
        }
        console.log("stripe and element present")

        const {error: submitError} = await elements.submit();
        if (submitError) {
            console.log(submitError);
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
          console.log(paymentResult.error)
        } else {
          clearCartItems()
        }
    }

    return (
      <div className='order-form-container'>
        <h1>ORDER FORM</h1>
        <form className='order-form' onSubmit={paymentHandler}>
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
        </form>
      </div>
    )
}
