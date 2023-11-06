import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js";
import { clearCart } from '../../../../../store/cart/cart.action'
import { useDispatch } from "react-redux";

// components
import PrimaryBtn from "../../../../../components/btns/primary-btn/PrimaryBtn";

export default function OrderForm({ clientSecret }) {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

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
                    name: 'Jenny Rosen',
                    email: 'jenny.rosen@example.com',
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
        <form className='order-form' onSubmit={paymentHandler}>
            <PaymentElement />
            <PrimaryBtn label={"PLACE ORDER"}/>
        </form>
    )
}
