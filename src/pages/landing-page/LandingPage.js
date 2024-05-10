import { useNavigate } from 'react-router-dom';

// styles
import {
    HeaderContainer,
    LandingPageContainer,
    LogoContainer,
    NavContainer,
    SystemModeContainer,
    AppsContainer,
    App1LogoContainer
} from './LandingPage.styles.js';

// assets
import instagram_dark from '../../assets/icons/instagram-icon-dark.png';
import moon_dark from './assets/moon-icon.svg';
import sun_dark from './assets/sun-icon.svg';
import tiktok_dark from '../../assets/icons/tiktok-icon-dark.png';

// components
import AppPanel from './components/app-panel/AppPanel.js';

export default function LandingPage() {
    const navigate = useNavigate();

  return (
    <LandingPageContainer>
        <HeaderContainer>
            <LogoContainer>
                <h1><em>presence</em></h1>
            </LogoContainer>
            <NavContainer>
                <h3>about</h3>
                <img src={tiktok_dark} alt='TikTok' />
                <img src={instagram_dark} alt='Instagram' />
                <SystemModeContainer>
                    <img src={moon_dark} alt={'Dark Mode'} />
                    <img src={sun_dark} alt={'Light Mode'} />
                </SystemModeContainer>
            </NavContainer>
        </HeaderContainer>
        <AppsContainer>
            <div onClick={() => navigate("/281-474-976-710-656")}>
            <AppPanel title={"281,474,976,710,656"} releaseDate={"JUN ‘24"}>
                
                <App1LogoContainer $isActive={true} >
                    <div className='gradientBG' />
                    <div className="texts-container">         
                        <h1 id="top"><em>presence</em></h1>
                        <h1 id="mid"><em>presence</em></h1>
                        <h1 id="bot"><em>presence</em></h1>
                    </div>
                
                </App1LogoContainer>
                
            </AppPanel>
            </div>
            <AppPanel title={"COMING SOON..."} $singleLine={true} />
        </AppsContainer>
    </LandingPageContainer>
  )
}
