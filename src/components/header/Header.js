import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';
import { setStatus } from '../../store/gradients/gradient.action.js';

// styles
import { 
    SocialsBtnContainer,
    HeaderContainer,
    CartBtnContainer,
    HeaderBtnImgContainer,
    CartBtnImgContainer
 } from './Header.styles.js';

// assets
import closeIcon from '../../assets/icons/close-icon.svg';

import bagIcon from '../../assets/icons/bag-icon.svg';
import menuIcon from '../../assets/icons/menu-icon.svg';
import storeIcon from '../../assets/icons/store-icon.svg';

// components
import Banner from '../banner/Banner';

export default function Header({ cartViewSetter, cartViewStatus, socialsViewSetter, socialsViewStatus }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartCount = useSelector(selectCartCount);
    const [cartViewIsActive, setCartViewIsActive] = useState(false);
    const [socialsViewIsActive, setSocialsViewIsActive] = useState(false);

    const handleNavigate = () => {
        dispatch(setStatus(true));
        if (cartCount !== 0) {
            navigate('/cart');
        }
    }

    const handleGridView = () => {
        if (socialsViewStatus) {
            return;
        }
        setCartViewIsActive(!cartViewIsActive);
        cartViewSetter(!cartViewIsActive);
    };

    const handleSocialsView = () => {
        if (cartViewStatus) {
            return;
        }
        setSocialsViewIsActive(!socialsViewIsActive);
        socialsViewSetter(!socialsViewIsActive);
    }

    useEffect(() => {
        setCartViewIsActive(cartViewStatus);
    }, [cartViewStatus]);

    useEffect(() => {
        setSocialsViewIsActive(socialsViewStatus);
    }, [socialsViewStatus]);

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }, [cartCount]);
    
    return (
        <HeaderContainer>
            <SocialsBtnContainer
                onClick={() => handleSocialsView()}
                initial={{ x: -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                    delay: 1,
                    ease: "easeOut",
                    times: [0, 1]
                }}
            >
                {!cartViewStatus ?
                    <HeaderBtnImgContainer $isVisible={!cartViewStatus}>
                        <img src={socialsViewIsActive ? closeIcon : menuIcon} alt={socialsViewIsActive ? "close icon" : "socials icon"} />
                    </HeaderBtnImgContainer>
                :
                    <div onClick={handleNavigate}>
                        <CartBtnImgContainer $isVisible={cartCount !== 0}
                            animate={{ scale: isAnimating ? 1.5 : 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                            <h4>{cartCount}</h4>
                            <img src={bagIcon} alt={"bag icon"} />
                        </CartBtnImgContainer> 
                    </div>
                }
            </SocialsBtnContainer>

            <Banner label={cartViewIsActive ? 'gift shop' : (socialsViewIsActive ? 'platforms' : 'presence')} />
            <CartBtnContainer
                onClick={() => handleGridView()}
                initial={{ x: 25, opacity: 0 }}
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
                    <HeaderBtnImgContainer $isVisible={!socialsViewStatus}>   
                        <img src={storeIcon} alt={"store icon"} />
                    </HeaderBtnImgContainer>
                }
            </CartBtnContainer>
        </HeaderContainer>
    )
}
