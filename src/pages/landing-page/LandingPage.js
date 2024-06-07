import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../store/system/system.selector.js';

// styles
import {
    LandingPageContainer,
    LandingHeaderContainer,
    AppsContainer,
    AppContainer,
    App1LogoContainer
} from './LandingPage.styles.js';

// components
import AppPanel from './components/app-panel/AppPanel.js';
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import LandingHeader from './components/landing-header/LandingHeader.js';
import ModeBG from './components/mode-bg/ModeBG.js';

export default function LandingPage() {
    const navigate = useNavigate();
    const systemMode = useSelector(selectSystemMode);

    const handleNavigate = () => {
        navigate("/281-474-976-710-656");
    }

  return (
    <LandingPageContainer $mode={systemMode}>
        <LandingHeaderContainer>
            <LandingHeader navLabel={'about'} navLink={'/about'}/>
        </LandingHeaderContainer>
        
        <AppsContainer>
            <AppContainer onClick={handleNavigate}>
                <ElementWrapper>
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
                </ElementWrapper>
            </AppContainer>
            <AppContainer>
                <ElementWrapper delay={0.2}>
                    <AppPanel title={"COMING SOON..."} $singleLine={true} />
                </ElementWrapper>
            </AppContainer>
        </AppsContainer>
        <ModeBG />
    </LandingPageContainer>
  )
}
