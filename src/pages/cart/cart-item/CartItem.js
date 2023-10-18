// styles
import './CartItem.scss'

export default function CartItem({ cartItem }) {
    const {name, quantity } = cartItem
    return (
        <div className='cart-item-container'>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}
