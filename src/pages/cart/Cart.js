// assets
import hanger from './assets/hanger_ALPHA.png'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'

// styles
import './Cart.scss'

export default function Cart({ articleData }) {
  return (
    <div className='cart-container'>
      <div className='cart-display-container'>
        <div className='cart-pole' />
        <div className='hanger-img-container'>
          <img src={hanger} alt='hanger' />
        </div>
        <div className='clothing-img-carousel-container'>
          <img src={articleData[0].img} alt="article img"/>
        </div>

        <div className='cart-carousel-btn-container'>
          <CarouselBtn icon={"leftArrow"}/>
          <h2>TITLE</h2>
          <CarouselBtn icon={"rightArrow"}/>
        </div>
      </div>    
    </div>
  )
}
