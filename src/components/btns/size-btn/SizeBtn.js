// styles
import './SizeBtn.scss'

// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export default function SizeBtn({ size, hoverCol, selectedSize=null }) {

  return (
    <div className={`size-btn-container ${selectedSize === size ? 'size-btn-container-active' : ''}`} style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <h3 style={{ textShadow: `2px 2px 1px rgba(${hoverCol}, 0.67)` }}>{size}</h3>
    </div>
  )
}