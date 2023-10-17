import { useNavigate } from 'react-router-dom'

// styles
import './OrderComplete.scss'

// assets
import cursorIconFilled from '../../assets/icons/cursor_filled.png'

export default function OrderComplete() {
    const navigate = useNavigate()

    return (
        <div className='order-complete-container'>
            <div className='order-complete-content'>
                <h1>order complete</h1>
                <h2 className='order-instructions'>check your email for further details</h2>
                <div className='return-btn' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}} onClick={() => navigate("/")}>
                    <h2>BACK HOME</h2>
                </div>
            </div>
        </div>
    )
}
