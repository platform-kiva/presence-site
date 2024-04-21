import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartIsOpen } from '../../../store/cart/cart.action.js';

// styles
import { 
    CartHeaderContainer,
    CartBtnContainer,
    CartHeaderBtnImgContainer
 } from './CartHeader.styles.js';

// assets
import chevronLeft from '../../../assets/icons/chevron-icon-left2.png';

// components
import Banner from '../../../components/banner/Banner.js';

export default function CartHeader({ nav }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigate = () => {
        dispatch(setCartIsOpen(true));
        navigate(nav);
    }
    
    return (
        <CartHeaderContainer>
            <CartBtnContainer onClick={handleNavigate}>
                <CartHeaderBtnImgContainer $isVisible={true}>   
                    <img src={chevronLeft} alt={"back button"} />
                </CartHeaderBtnImgContainer>
            </CartBtnContainer>

            <Banner label={'cart'} />

            <CartBtnContainer>
                <CartHeaderBtnImgContainer $isVisible={false}>   
                    <img src={chevronLeft} alt={"trick button"} />
                </CartHeaderBtnImgContainer>
            </CartBtnContainer>
        </CartHeaderContainer>
    )
}
