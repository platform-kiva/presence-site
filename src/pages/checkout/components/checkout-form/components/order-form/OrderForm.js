import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// styles
import './OrderForm.styles.scss'

// components
import PrimaryBtn from '../../../../../../components/btns/primary-btn/PrimaryBtn'

export default function OrderForm() {

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 10000 })
    }).then(res => res.json())

    console.log(response)
  }

  return (
    <div className='order-form-container'>
      
      <form onSubmit={paymentHandler}>
        <CardElement />
        <PrimaryBtn label={"PLACE ORDER"}/>
      </form>
    </div>
  )
}
