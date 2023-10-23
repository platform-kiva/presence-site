// styles
import './CartItem.scss'

export default function CartItem({ cartItem }) {
    const { img } = cartItem

    return (
        <>
            <div className='cart-item-container'>
                <img src={img} alt='product img' className='cart-item-img'/>
            </div>
        </>
    )
}
