// styles
import { CartItemContainer, CartItemImg } from "./CartItem.styles"

export default function CartItem({ cartItem }) {
    const { imgURL } = cartItem

    return (
        <>
            <CartItemContainer>
                <CartItemImg src={imgURL} alt='product img'/>
            </CartItemContainer>
        </>
    )
}