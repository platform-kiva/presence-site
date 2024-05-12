import { useSelector } from 'react-redux';
import { selectSystemMode } from '../../store/system/system.selector.js';

// styles
import {
    AboutContainer,
    AboutDescription,
    AboutText
} from './About.styles.js';

// components
import LandingHeader from './components/landing-header/LandingHeader'

export default function About() {
    const systemMode = useSelector(selectSystemMode);

    return (
        <AboutContainer $mode={systemMode}>
            <LandingHeader navLabel={'home'} navLink={'/'}/>
            <AboutDescription>
                <AboutText $mode={systemMode}>
                    <em>presence</em> is a sandbox for the design of experiences. works are created at the intersections of 
                    art, utility, lifestyle, and zeitgeist. 
                </AboutText>
                <AboutText $mode={systemMode}>
                    new experiences are released periodically, follow @presence.exp for more.
                </AboutText>
            </AboutDescription>
        </AboutContainer>
    )
}
