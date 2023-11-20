import { useNavigate } from 'react-router-dom'

// styles
import {
    NavBtnContainer,
    SideIcon1, SideIcon2, SideIcon3
} from './NavBtn.styles.js'

// assets
import chevronUp from '../../../assets/icons/chevron-icon-up.png'
import chevronDown from '../../../assets/icons/chevron-icon-down.png'

// components
import CarouselBtn from '../carousel-btn/CarouselBtn'

export default function NavBtn({ direction, btnIcon, link=null, headerNav=false }) {
    const navigate = useNavigate()

    const handleNavigation = () => {
        if (link) {
            navigate(link)
        }
    }

    return (
        <NavBtnContainer onClick={() => handleNavigation()}>
            {headerNav &&
                <>
                    {direction === 'up' && 
                        <>
                            <SideIcon3 src={chevronUp} alt="chevron icon" />
                            <SideIcon2 src={chevronUp} alt="chevron icon" />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <CarouselBtn icon={btnIcon} />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <SideIcon2 src={chevronUp} alt="chevron icon" />
                            <SideIcon3 src={chevronUp} alt="chevron icon" />
                        </>
                    }
                    {direction === 'down' &&
                        <>
                            <SideIcon3 src={chevronDown} alt="chevron icon" />
                            <SideIcon2 src={chevronDown} alt="chevron icon" />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <CarouselBtn icon={btnIcon} />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <SideIcon2 src={chevronDown} alt="chevron icon" />
                            <SideIcon3 src={chevronDown} alt="chevron icon" />
                        </>
                    }
                </>
            }
            {!headerNav &&
                <>
                    {direction === 'up' && 
                        <>
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <CarouselBtn icon={btnIcon} />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                            <SideIcon1 src={chevronUp} alt="chevron icon" />
                        </>
                    }
                    {direction === 'down' &&
                        <>
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <CarouselBtn icon={btnIcon} />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                            <SideIcon1 src={chevronDown} alt="chevron icon" />
                        </>
                    }
                </>
            }

        </NavBtnContainer>
    )
}