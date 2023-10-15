// styles
import './SeaLevelContainer.scss'

// assets
import cursorIconFilled from '../../../../assets/icons/cursor_filled.png'

export default function SeaLevelContainer({ articleData, articleIndex }) {
  return (
    <div className='sea-level-collage' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <img className='article-img-container' src={articleData[articleIndex].img} alt='article' />
    </div>
  )
}
