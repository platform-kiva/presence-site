// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'
import downArrow from '../../../assets/icons/arrow-down.png'
import leftArrow from '../../../assets/icons/arrow-left.png'
import rightArrow from '../../../assets/icons/arrow-right.png'

// styles
import './CarouselBtn.scss'

export default function CarouselBtn({ icon }) {
  return (
    <div className='carousel-btn-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        {icon === "leftArrow" && 
          <img src={leftArrow} alt='left arrow icon' />
        }
        {icon === "rightArrow" &&
          <img src={rightArrow} alt='right arrow icon' />
        }
        {icon === "downArrow" &&
          <img src={downArrow} alt='down arrow icon' />
        }
    </div>
  )
}
