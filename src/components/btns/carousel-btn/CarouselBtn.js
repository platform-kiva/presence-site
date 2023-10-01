// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

// styles
import './CarouselBtn.scss'

export default function CarouselBtn({ icon }) {
  return (
    <div className='carousel-btn-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <img src={icon} alt='arrow icon' />
    </div>
  )
}
