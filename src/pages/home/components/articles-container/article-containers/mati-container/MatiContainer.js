// styles
import './MatiContainer.scss'

// assets
import cursorIconFilled from '../../../../../../assets/icons/cursor_filled.png'
import matiEye from '../../../../../../assets/clothing-college/shirt1_eye.png'

export default function MatiContainer({ articleData, articleIndex }) {
  return (
    <div className='shirt1-collage' style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>
        <img className='mati-eye-1' src={matiEye} alt='mati eye'/>
        <img className='mati-eye-2' src={matiEye} alt='mati eye'/>
        <img className='article-img-container' src={articleData[articleIndex].img} alt='article' />
        <img className='mati-eye-3' src={matiEye} alt='mati eye'/>
    </div>
  )
}
