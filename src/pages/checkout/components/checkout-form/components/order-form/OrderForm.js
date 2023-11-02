import { CardElement } from '@stripe/react-stripe-js';

// styles
import './OrderForm.styles.scss'

// components
import PrimaryBtn from '../../../../../../components/btns/primary-btn/PrimaryBtn'

export default function OrderForm() {
  // const stripe = useStripe();
  // const elements = useElements();

  // const paymentHandler = async (e) => {
  //   e.preventDefault();

  //   if(!stripe || !elements) {
  //     return;
  //   }
  // }

  return (
    <div className='order-form-container'>
      <CardElement />
      <form>
        <PrimaryBtn label={"PLACE ORDER"}/>
      </form>
    </div>
  )
}
