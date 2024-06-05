import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartIsOpen } from '../../../store/cart/cart.action.js';

// styles
import { 
    CartHeaderContainer,
    HeaderBtnContainer
 } from './CartHeader.styles.js';

// assets
import chevronIcon from '../../../assets/icons/chevron-icon.svg';

// components
import Banner from '../../../components/banner/Banner.js';
import HeaderIcon from '../../../components/header/components/header-icon/HeaderIcon.js';

export default function CartHeader({ nav }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigate = () => {
        dispatch(setCartIsOpen(true));
        navigate(nav);
    }
    
    return (
        <CartHeaderContainer>
            <HeaderBtnContainer onClick={handleNavigate}>
                <HeaderIcon iconSize={20}>   
                    <img src={chevronIcon} alt={"back button"} />
                </HeaderIcon>
            </HeaderBtnContainer>

            <Banner label={'cart'} />

            <HeaderBtnContainer>
                {1 == 0 &&
                    <HeaderIcon iconSize={20}>   
                        <img src={chevronIcon} alt={"trick button"} />
                    </HeaderIcon>
                }
            </HeaderBtnContainer>
        </CartHeaderContainer>
    )
}
