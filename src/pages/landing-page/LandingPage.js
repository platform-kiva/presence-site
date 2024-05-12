import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../store/system/system.selector.js';

// styles
import {
    LandingPageContainer,
    AppsContainer,
    App1LogoContainer
} from './LandingPage.styles.js';

// components
import AppPanel from './components/app-panel/AppPanel.js';
import LandingHeader from './components/landing-header/LandingHeader.js';

export default function LandingPage() {
    const navigate = useNavigate();
    const systemMode = useSelector(selectSystemMode);

  return (
    <LandingPageContainer $mode={systemMode}>
        <LandingHeader navLabel={'about'} navLink={'/about'}/>
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
