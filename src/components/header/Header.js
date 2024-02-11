import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';

// styles
import { 
    HeaderBtnContainer,
    HeaderContainer,
    CartBtnContainer,
    HeaderBtnImgContainer,
    CartBtnImgContainer
 } from './Header.styles.js';

// assets
import closeIcon from '../../assets/icons/close-icon.svg';
import bagIcon from '../../assets/icons/bag-icon.svg';
import menuIcon from '../../assets/icons/menu-icon.svg';

// components
import Banner from '../banner/Banner';

export default function Header({ cartViewSetter, cartViewStatus, socialsViewSetter, socialsViewStatus }) {
    const cartCount = useSelector(selectCartCount);
    const [cartViewIsActive, setCartViewIsActive] = useState(false);
    const [socialsViewIsActive, setSocialsViewIsActive] = useState(false);

    const handleGridView = () => {
        if (socialsViewStatus) {
            return
        }
        setCartViewIsActive(!cartViewIsActive);
        cartViewSetter(!cartViewIsActive);
    };

    const handleSocialsView = () => {
        if (cartViewStatus) {
            return
        }
        setSocialsViewIsActive(!socialsViewIsActive);
        socialsViewSetter(!socialsViewIsActive);
    }

    useEffect(() => {
        setCartViewIsActive(cartViewStatus)
    }, [cartViewStatus])

    useEffect(() => {
        setSocialsViewIsActive(socialsViewStatus)
    }, [socialsViewStatus])

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }, [cartCount]);
    
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
                <HeaderBtnImgContainer $isVisible={!cartViewStatus}>
                    <img src={socialsViewIsActive ? closeIcon : menuIcon} alt={socialsViewIsActive ? "close icon" : "socials icon"} />
                </HeaderBtnImgContainer> 
            </HeaderBtnContainer>
            <Banner />
            <CartBtnContainer onClick={() => handleGridView()}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                {cartViewIsActive ?
                    <HeaderBtnImgContainer $isVisible={!socialsViewStatus}>   
                        <img src={closeIcon} alt={"close icon"} />
                    </HeaderBtnImgContainer>
                    :
                    <CartBtnImgContainer $isVisible={!socialsViewStatus}
                        animate={{ scale: isAnimating ? 1.5 : 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <h4>{cartCount}</h4>
                        <img src={bagIcon} alt={"cart icon"} />
                    </CartBtnImgContainer> 
                }
            </CartBtnContainer>
        </HeaderContainer>
    )
}
