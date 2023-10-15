// styles
import './SizeBtn.scss'

// assets
import cursorIconFilled from '../../../assets/icons/cursor_filled.png'

export default function SizeBtn({ size }) {
  return (
    <div className='size-btn-container' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <h3>{size}</h3>
    </div>
  )
}