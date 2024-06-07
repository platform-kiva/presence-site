import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../store/system/system.selector.js';

// styles
import {
    AboutContainer,
    LandingHeaderContainer,
    AboutContentContainer,
    SocialsContainer,
    AboutDescription,
    AboutText
} from './About.styles.js';

// assets
import instagram_dark from '../../assets/icons/instagram-icon-dark.png';
import tiktok_dark from '../../assets/icons/tiktok-icon-dark.png';

// components
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import LandingHeader from './components/landing-header/LandingHeader';
import ModeBG from './components/mode-bg/ModeBG.js';

export default function About() {
    const systemMode = useSelector(selectSystemMode);

    return (
        <AboutContainer $mode={systemMode}>
            <LandingHeaderContainer>
                <LandingHeader socials={false} navLabel={'back'} navLink={'/'}/>
            </LandingHeaderContainer>   
            
            <AboutContentContainer>
                <SocialsContainer>
                    <ElementWrapper delay={0.4}>
                        <a href="https://www.tiktok.com/@presence.exp" target="_blank" rel="noopener noreferrer">
                            <img style={{ filter: systemMode === "light" ? 'invert(100%)' : 'invert(100%)' }} src={tiktok_dark} alt='TikTok' />
                        </a>
                    </ElementWrapper>
                    <ElementWrapper delay={0.5}>
                        <a href="https://www.instagram.com/presence.exp/" target="_blank" rel="noopener noreferrer">
                            <img style={{ filter: systemMode === "light" ? 'invert(100%)' : 'invert(100%)' }} src={instagram_dark} alt='Instagram' />
                        </a>  
                    </ElementWrapper>
                </SocialsContainer>
                <AboutDescription>
                    <ElementWrapper>
                    <AboutText $mode={systemMode}>
                        <em>presence</em> is a sandbox for the design of experiences. works are created at the intersections of 
                        art, utility, lifestyle, and zeitgeist. 
                    </AboutText>
                    </ElementWrapper>
                    <ElementWrapper delay={0.3}>
                        <AboutText $mode={systemMode}>
                            new experiences are released periodically, follow <a href="https://www.instagram.com/presence.exp/" target="_blank" rel="noopener noreferrer"><em>@presence.exp</em></a> for more.
                        </AboutText>
                    </ElementWrapper>
                </AboutDescription>
            </AboutContentContainer>
            <ModeBG />
        </AboutContainer>
    )
}
