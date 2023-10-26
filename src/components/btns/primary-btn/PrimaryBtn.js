// styles
import './PrimaryBtn.scss'

// assets
import cursorIcon from '../../../assets/icons/cursor.png'
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export default function PrimaryBtn({ label, accentCol, isActive=true }) {
  return (
    <div className={`primary-btn-container ${isActive ? 'primary-btn-container-active' : ''}`} style={{ cursor: `url(${isActive ? cursorIconFilled : cursorIcon}) 15 15, auto` }}>
        <h3 style={{ textShadow: `2px 2px 1px rgba(${accentCol}, 0.67)` }}>{label}</h3>
    </div>
  )
}
