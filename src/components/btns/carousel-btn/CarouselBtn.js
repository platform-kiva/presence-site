// assets
import cartIcon from '../../../assets/icons/bag-icon.svg'
import chevronUp from '../../../assets/icons/chevron-icon-up.png'
import chevronDown from '../../../assets/icons/chevron-icon-down.png'
import chevronLeft from '../../../assets/icons/chevron-icon-left.png'
import chevronRight from '../../../assets/icons/chevron-icon-right.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

// styles
import './CarouselBtn.scss'

export default function CarouselBtn({ icon, filled=true }) {
  return (
    <div className={`carousel-btn-container ${filled ? "carousel-btn-container-filled" : ""}`} style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        {icon === "up" &&
          <img src={chevronUp} alt='up arrow icon' />
        }
        {icon === "down" &&
          <img src={chevronDown} alt='down arrow icon' />
        }
        {icon === "left" && 
          <img src={chevronLeft} alt='left arrow icon' />
        }
        {icon === "right" &&
          <img src={chevronRight} alt='right arrow icon' />
        }
        {icon === "cart" &&
          <img src={cartIcon} alt='cart icon' style={{ filter: 'invert(1)' }}/>
        }
    </div>
  )
}
