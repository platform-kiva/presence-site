import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/cart/cart.action.js';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

// styles
import {
    OrderCompleteContainer,
    OrderCompleteContent,
    Message,
    BtnContainer,
} from './OrderComplete.styles.js'

// components
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js';

export default function OrderComplete() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems)

    const handleClick = () => {

        const gradientData = cartItems.map(item => ({
            id: item.id,
            count: item.quantity
        }));

        addCollectionAndDocuments('purchased', gradientData)
        dispatch(clearCart());
        navigate("../home");
    }

    return (
        <OrderCompleteContainer>
            <OrderCompleteContent>
                <Message>
                    <h2>ORDER COMPLETE</h2>
                    <h3>please check your email for further details</h3>
                </Message>

                <BtnContainer onClick={() => handleClick()}>
                    <PrimaryBtn label={"BACK TO HOME"}/>
                </BtnContainer>
            </OrderCompleteContent>
        </OrderCompleteContainer>
    )
}
