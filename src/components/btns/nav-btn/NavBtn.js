import { useNavigate } from 'react-router-dom'

// styles
import {
    NavBtnContainer,
    SideIcons
} from './NavBtn.styles.js'

// assets
import chevronUp from '../../../assets/icons/chevron-icon-up.png'
import chevronDown from '../../../assets/icons/chevron-icon-down.png'

// components
import CarouselBtn from '../carousel-btn/CarouselBtn'

export default function NavBtn({ direction, btnIcon, link=null }) {
    const navigate = useNavigate()

    const handleNavigation = () => {
        if (link) {
            navigate(link)
        }
    }

    return (
        <NavBtnContainer onClick={() => handleNavigation()}>
            {direction === 'up' && 
                <>
                    <SideIcons src={chevronUp} alt="chevron icon" />
                    <SideIcons src={chevronUp} alt="chevron icon" />
                    <SideIcons src={chevronUp} alt="chevron icon" />
                    <CarouselBtn icon={btnIcon} />
                    <SideIcons src={chevronUp} alt="chevron icon" />
                    <SideIcons src={chevronUp} alt="chevron icon" />
                    <SideIcons src={chevronUp} alt="chevron icon" />
                </>
            }
            {direction === 'down' &&
                <>
                    <SideIcons src={chevronDown} alt="chevron icon" />
                    <SideIcons src={chevronDown} alt="chevron icon" />
                    <SideIcons src={chevronDown} alt="chevron icon" />
                    <CarouselBtn icon={btnIcon} />
                    <SideIcons src={chevronDown} alt="chevron icon" />
                    <SideIcons src={chevronDown} alt="chevron icon" />
                    <SideIcons src={chevronDown} alt="chevron icon" />
                </>
            }
        </NavBtnContainer>
    )
}