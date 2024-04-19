import { useNavigate } from 'react-router-dom';

// styles
import { 
    HeaderContainer,
    CartBtnContainer,
    HeaderBtnImgContainer
 } from './CartHeader.styles.js';

// assets
import chevronLeft from '../../../assets/icons/chevron-icon-left.png';

// components
import Banner from '../../../components/banner/Banner.js';

export default function CartHeader() {
    const navigate = useNavigate();
    
    return (
        <HeaderContainer>

            <CartBtnContainer onClick={() => navigate('/home')}>
                <HeaderBtnImgContainer $isVisible={true}>   
                    <img src={chevronLeft} alt={"trick button"} />
                </HeaderBtnImgContainer>
            </CartBtnContainer>

            <Banner label={'cart'} />

            <CartBtnContainer>
                <HeaderBtnImgContainer $isVisible={false}>   
                    <img src={chevronLeft} alt={"trick button"} />
                </HeaderBtnImgContainer>
            </CartBtnContainer>
        </HeaderContainer>
    )
}
