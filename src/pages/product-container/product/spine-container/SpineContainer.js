// styles
import './SpineContainer.scss'

// assets
import cursorIconFilled from '../../../../assets/icons/cursor_filled.png'

export default function SpineContainer({ articleData, articleIndex }) {
  return (
    <div className='spine-collage' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <img className='article-img-container' src={articleData[articleIndex].img} alt='article' />
    </div>
  )
}
