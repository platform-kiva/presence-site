import { useDispatch, useSelector } from 'react-redux';
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

export default function LandingHeader() {
    const dispatch = useDispatch();
    const systemMode = useSelector(selectSystemMode);

    const handleSystemChange = (mode) => {
        if (mode === "light") {
            dispatch(setSystemMode("light"));
        } else {
            dispatch(setSystemMode("dark"));
        }
    }

    return (
        <LandingHeaderContainer>
            <LogoContainer $mode={systemMode}>
                <h1><em>presence</em></h1>
            </LogoContainer>
            <NavContainer $mode={systemMode}>
                <h3>about</h3>
                <a href="https://www.tiktok.com/@presence.exp" target="_blank" rel="noopener noreferrer">
                    <img style={{ filter: systemMode === "light" ? '' : 'invert(100%)' }} src={tiktok_dark} alt='TikTok' />
                </a>
                <a href="https://www.instagram.com/presence.exp/" target="_blank" rel="noopener noreferrer">
                    <img style={{ filter: systemMode === "light" ? '' : 'invert(100%)' }} src={instagram_dark} alt='Instagram' />
                </a>
                
                <SystemModeContainer $mode={systemMode}>
                    <MoonIcon src={moon_icon} alt="Dark Mode" onClick={() => handleSystemChange('dark')} />
                    <span />
                    <SunIcon $mode={systemMode} src={sun_icon} alt="Light Mode" onClick={() => handleSystemChange('light')} />
                    <BackgroundDiv $mode={systemMode} />
                </SystemModeContainer>
            </NavContainer>
        </LandingHeaderContainer>
    )
}
