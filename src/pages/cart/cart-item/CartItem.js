// styles
import { CartItemImgContainer } from "./CartItem.styles"

// components
import ImgLoader from "../../../components/img-loader/ImgLoader"

export default function CartItem({ cartItem }) {
    const { imgURL } = cartItem

    return (
        <CartItemImgContainer>
            <ImgLoader src={imgURL} alt={'product img'}/>
        </CartItemImgContainer>
    )
}