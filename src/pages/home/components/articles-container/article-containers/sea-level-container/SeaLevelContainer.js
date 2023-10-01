// styles
import './SeaLevelContainer.scss'

// assets
import buoy from '../sea-level-container/assets/sea-level-buoy.png'
import cursorIconFilled from '../../../../../../assets/icons/cursor_filled.png'

export default function SeaLevelContainer({ articleData, articleIndex }) {
  return (
    <div className='sea-level-collage' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <img className='buoy-1' src={buoy} alt='mati eye'/>
        <img className='article-img-container' src={articleData[articleIndex].img} alt='article' />
    </div>
  )
}
