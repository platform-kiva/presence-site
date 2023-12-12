import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';

// styles
import { 
    HeaderBtnContainer,
    HeaderContainer,
    HeaderBtnImgContainer
 } from './Header.styles.js';

// assets
import closeIcon from '../../assets/icons/close-icon.svg';
import gridIcon from '../../assets/icons/grid-icon.svg';
import menuIcon from '../../assets/icons/menu-icon.svg';

// components
import Banner from '../banner/Banner'
import NavBtn from '../btns/nav-btn/NavBtn'
import { useEffect } from 'react';

export default function Header({ gridViewSetter, gridViewStatus, socialsViewSetter, socialsViewStatus }) {
    const cartCount = useSelector(selectCartCount);
    const [gridViewIsActive, setGridViewIsActive] = useState(false);
    const [socialsViewIsActive, setSocialsViewIsActive] = useState(false);

    const handleGridView = () => {
        if (socialsViewStatus) {
            return
        }
        setGridViewIsActive(!gridViewIsActive);
        gridViewSetter(!gridViewIsActive);
    };

    const handleSocialsView = () => {
        if (gridViewStatus) {
            return
        }
        setSocialsViewIsActive(!socialsViewIsActive);
        socialsViewSetter(!socialsViewIsActive);
    }

    useEffect(() => {
        setGridViewIsActive(gridViewStatus)
    }, [gridViewStatus])

    useEffect(() => {
        setSocialsViewIsActive(socialsViewStatus)
    }, [socialsViewStatus])
    
    return (
        <HeaderContainer>
            <HeaderBtnContainer onClick={() => handleSocialsView()}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                <HeaderBtnImgContainer $isVisible={!gridViewStatus}>
                    <img src={socialsViewIsActive ? closeIcon : menuIcon} alt={socialsViewIsActive ? "close icon" : "socials icon"} />
                </HeaderBtnImgContainer> 
            </HeaderBtnContainer>
            {cartCount === 0 ? 
                <Banner />
            :
                <NavBtn direction={"up"} btnIcon={"cart"} link={"/cart"} headerNav={true} />      
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
                <HeaderBtnImgContainer $isVisible={!socialsViewStatus}>
                    <img src={gridViewIsActive ? closeIcon : gridIcon} alt={gridViewIsActive ? "close icon" : "grid icon"} />
                </HeaderBtnImgContainer>
            </HeaderBtnContainer>
        </HeaderContainer>
    )
}
