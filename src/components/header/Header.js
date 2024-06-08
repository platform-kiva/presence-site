import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cart.selector.js';
import { setStatus } from '../../store/gradients/gradient.action.js';

// styles
import { 
    HeaderContainer,
    HeaderBtnContainer,
    CartBtnContainer
 } from './Header.styles.js';

// assets
import bagIcon from '../../assets/icons/bag-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import menuIcon from '../../assets/icons/menu-icon.svg';
import storeIcon from '../../assets/icons/store-icon.svg';

// components
import HeaderIcon from './components/header-icon/HeaderIcon.js';

export default function Header({ cartViewSetter, cartViewStatus, socialsViewSetter, socialsViewStatus }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartCount = useSelector(selectCartCount);
    const [giftShopViewIsActive, setGiftShopViewIsActive] = useState(false);
    const [socialsViewIsActive, setSocialsViewIsActive] = useState(false);

    const handleNavigate = () => {
        dispatch(setStatus(true));
        if (cartCount !== 0) {
            navigate('../cart');
        }
    }

    const handleGiftShopView = () => {
        if (socialsViewStatus) {
            return;
        }
        setGiftShopViewIsActive(!giftShopViewIsActive);
        cartViewSetter(!giftShopViewIsActive);
    };

    const handleSocialsView = () => {
        if (cartViewStatus) {
            return;
        }
        setSocialsViewIsActive(!socialsViewIsActive);
        socialsViewSetter(!socialsViewIsActive);
    }

    useEffect(() => {
        setGiftShopViewIsActive(cartViewStatus);
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
            
            <HeaderBtnContainer onClick={handleSocialsView}>
                <HeaderIcon iconSize={20}>
                    {!giftShopViewIsActive &&
                        <img src={socialsViewIsActive ? closeIcon : menuIcon} alt={socialsViewIsActive ? "close icon" : "socials icon"} />
                    }
                </HeaderIcon>
            </HeaderBtnContainer>
        
            <HeaderBtnContainer onClick={handleGiftShopView}>
                <HeaderIcon iconSize={20}>
                    {!socialsViewIsActive &&
                    <   img src={!giftShopViewIsActive ? storeIcon : closeIcon} alt={giftShopViewIsActive ? "store icon" : "close icon"} />
                    }
                </HeaderIcon>
            </HeaderBtnContainer>
            
            {cartCount !== 0 && !socialsViewIsActive &&
                <CartBtnContainer
                    onClick={handleNavigate}
                    animate={{ scale: isAnimating ? 1.5 : 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <HeaderIcon iconSize={26}>
                        <h4>{cartCount}</h4>
                        <img src={bagIcon} alt={"bag icon"} />
                    </HeaderIcon>
                </CartBtnContainer>
            }
        </HeaderContainer>
    )
}
