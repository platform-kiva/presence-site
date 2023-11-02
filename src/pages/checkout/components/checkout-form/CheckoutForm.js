import { Outlet } from 'react-router-dom'

// styles
import './CheckoutForm.styles.scss'

export default function CheckoutForm() {
  return (
    <div className='checkout-form-container'>
      <Outlet />
    </div>
  )
}
