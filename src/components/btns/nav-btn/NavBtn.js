import { useNavigate } from 'react-router-dom'

// styles
import './NavBtn.scss'

// assets
import chevronUp from '../../../assets/icons/chevron-icon-up.png'
import chevronDown from '../../../assets/icons/chevron-icon-down.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

// components
import CarouselBtn from '../carousel-btn/CarouselBtn'

export default function NavBtn({ direction, btnIcon, link=null }) {
    const navigate = useNavigate()

    const handleNavigation = () => {
        if (link === null ) {
            console.log("no linke")
        } else {
            navigate(link)
        }
    }

    return (
        <div
            className='nav-btn-container'
            style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}
            onClick={() => handleNavigation()}
        >
            {direction === 'up' && 
                <>
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                    <CarouselBtn icon={btnIcon} />
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                    <img className='side-icons' src={chevronUp} alt="chevron icon" />
                </>
            }
            {direction === 'down' &&
                <>
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                    <CarouselBtn icon={btnIcon} />
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                    <img className='side-icons' src={chevronDown} alt="chevron icon" />
                </>
            }
        </div>
    )
}