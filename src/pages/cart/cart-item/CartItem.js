// styles
import './CartItem.scss'

export default function CartItem({ cartItem, cartInd }) {
    const { img } = cartItem

    return (
        <>
            {/* {cartInd === cartItem.id && */}
                <div className='cart-item-container'>
                    <img src={img} alt='product img' className='cart-item-img'/>
                </div>
            {/* } */}
        </>
    )
}
