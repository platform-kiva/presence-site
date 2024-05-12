import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSystemMode } from '../../../../store/system/system.selector.js';
import { setSystemMode } from '../../../../store/system/system.action.js';

// styles
import {
    LandingHeaderContainer,
    LogoContainer,
    NavContainer,
    SystemModeContainer,
    MoonIcon,
    SunIcon,
    BackgroundDiv
} from './LandingHeader.styles.js';

// assets
import instagram_dark from '../../../../assets/icons/instagram-icon-dark.png'
import moon_icon from '../../assets/moon-icon.svg';
import sun_icon from '../../assets/sun-icon.svg';
import tiktok_dark from '../../../../assets/icons/tiktok-icon-dark.png';

export default function LandingHeader({ navLabel, navLink }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const systemMode = useSelector(selectSystemMode);

    const handleSystemChange = (mode) => {
        if (systemMode === "light") {
            dispatch(setSystemMode("dark"));
        } else {
            dispatch(setSystemMode("light"));
        }
    }
    
    const handleNav = (path) => {
        navigate(path)
    }

    return (
        <LandingHeaderContainer>
            <LogoContainer $mode={systemMode}>
                <div onClick={() => navigate("/")}>
                    <h1><em>presence</em></h1>
                </div>
            </LogoContainer>
            <NavContainer $mode={systemMode}>
                <h3 onClick={() => handleNav(navLink)}>{navLabel}</h3>
                <a href="https://www.tiktok.com/@presence.exp" target="_blank" rel="noopener noreferrer">
                    <img style={{ filter: systemMode === "light" ? 'invert(100%)' : 'invert(100%)' }} src={tiktok_dark} alt='TikTok' />
                </a>
                <a href="https://www.instagram.com/presence.exp/" target="_blank" rel="noopener noreferrer">
                    <img style={{ filter: systemMode === "light" ? 'invert(100%)' : 'invert(100%)' }} src={instagram_dark} alt='Instagram' />
                </a>  
                <SystemModeContainer $mode={systemMode} onClick={() => handleSystemChange()}>
                    <MoonIcon $mode={systemMode} src={moon_icon} alt="Dark Mode" />
                    <span />
                    <SunIcon $mode={systemMode} src={sun_icon} alt="Light Mode" />
                    <BackgroundDiv $mode={systemMode} />
                </SystemModeContainer>
            </NavContainer>
        </LandingHeaderContainer>
    )
}