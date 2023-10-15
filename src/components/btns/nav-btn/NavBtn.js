// styles
import './NavBtn.scss'

// assets
import chevronUp from '../../../assets/icons/chevron-icon-up.png'
import chevronDown from '../../../assets/icons/chevron-icon-down.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

// components
import CarouselBtn from '../carousel-btn/CarouselBtn'

export default function NavBtn({ direction }) {
  return (
    <div className='nav-btn-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        {direction === 'down' &&
            <>
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
                <CarouselBtn icon="down" />
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
                <img className='side-icons' src={chevronDown} alt="chevron icon" />
            </>
        }
        {direction === 'up' && 
            <>
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
                <CarouselBtn icon="up" />
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
                <img className='side-icons' src={chevronUp} alt="chevron icon" />
            </>
        }
    </div>
  )
}