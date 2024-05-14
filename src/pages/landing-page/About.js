import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../store/system/system.selector.js';

// styles
import {
    AboutContainer,
    AboutDescription,
    AboutText
} from './About.styles.js';

// components
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import LandingHeader from './components/landing-header/LandingHeader'

export default function About() {
    const systemMode = useSelector(selectSystemMode);

    return (
        <AboutContainer $mode={systemMode}>
            <LandingHeader navLabel={'home'} navLink={'/'}/>
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
            
        </AboutContainer>
    )
}
