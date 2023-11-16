import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';

// styles
import { HeaderBtnContainer, HeaderContainer } from './Header.styles.js';

// assets
import closeIcon from '../../assets/icons/close-icon.svg';
import gridIcon from '../../assets/icons/grid-icon.svg';
import menuIcon from '../../assets/icons/menu-icon.svg';

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'

export default function Header() {
    const cartCount = useSelector(selectCartCount);
    const [gridViewIsActive, setGridViewIsActive] = useState(false);

    const handleGridView = () => {
        setGridViewIsActive(!gridViewIsActive);
    };
    
    return (
        <HeaderContainer>
            <HeaderBtnContainer
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                <img src={menuIcon} alt="menu icon" />
            </HeaderBtnContainer>
            
            {cartCount === 0 ? 
                <Banner />
            :
                <NavBtn direction={"up"} btnIcon={"cart"} link={"/cart"} />      
            }
            <HeaderBtnContainer onClick={() => handleGridView()}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                <img src={gridViewIsActive ? closeIcon : gridIcon} alt={gridViewIsActive ? "close icon" : "grid icon"} />
            </HeaderBtnContainer>
        </HeaderContainer>
    )
}
