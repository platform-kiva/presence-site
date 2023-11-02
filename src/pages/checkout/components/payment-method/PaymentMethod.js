import { useNavigate } from 'react-router-dom'

// styles
import './PaymentMethod.styles.scss'

export default function PaymentMethod() {
    const navigate = useNavigate()
    
    return (
        <div className='payment-method-container'>
            <div className='payment-method-col'>
                <h1>EXPRESS PAYMENT</h1>
                <div className='payment-method-options-container'>
                    <div className='express-payment-option-container'>
                        <h3>APPLE PAY</h3>
                    </div>
                    <div className='express-payment-option-container'>
                        <h3>GOOGLE PAY</h3>
                    </div>
                    <div className='express-payment-option-container'>
                        <h3>PAYPAL</h3>
                    </div>
                    <div className='express-payment-option-container'>
                        <h3>VENMO</h3>
                    </div>
                    <div className='express-payment-option-container'>
                        <h3>CASHAPP</h3>
                    </div>
                </div>
            </div>
            <div className='payment-method-col'>
                <h1>CARD PAYMENT</h1>
                <div className='payment-method-options-container' onClick={() => navigate('/checkout/order-form')}>
                    <div className='card-payment-option-container'>
                        <h3>CARD</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
