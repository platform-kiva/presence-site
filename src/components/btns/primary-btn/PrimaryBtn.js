// styles
import './PrimaryBtn.scss'

// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export default function PrimaryBtn({ label, hoverCol }) {
  return (
    <div className='primary-btn-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <h3 style={{ textShadow: `2px 2px 1px rgba(${hoverCol}, 0.67)` }}>{label}</h3>
    </div>
  )
}
