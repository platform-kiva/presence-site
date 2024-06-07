import { useNavigate } from 'react-router-dom';

// styles
import { 
    HeaderContainer,
    HeaderBtnContainer
 } from './CheckoutHeader.styles.js';

// assets
import chevronIcon from '../../../../assets/icons/chevron-icon.svg';

// components
import Banner from '../../../../components/banner/Banner.js';
import HeaderIcon from '../../../../components/header/components/header-icon/HeaderIcon.js';

export default function CheckoutHeader({ nav }) {
    const navigate = useNavigate();
    
    return (
        <HeaderContainer>

            <HeaderBtnContainer onClick={() => navigate(nav)}>
                <HeaderIcon iconSize={20}>   
                    <img src={chevronIcon} alt={"back button"} />
                </HeaderIcon>
            </HeaderBtnContainer>

            <div style={{ pointerEvents: "none" }}>
                <Banner label={'checkout'} />
            </div>
            

            <HeaderBtnContainer>
                {1 == 0 &&
                    <HeaderIcon iconSize={20}>   
                        <img src={chevronIcon} alt={"trick button"} />
                    </HeaderIcon>
                }
            </HeaderBtnContainer>
        </HeaderContainer>
    )
}
