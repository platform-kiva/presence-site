// styles
import { CartItemImg } from "./CartItem.styles"

export default function CartItem({ cartItem }) {
    const { imgURL } = cartItem

    return (
        <>
            <CartItemImg src={imgURL} alt='product img'/>
        </>
    )
}