import { useEffect, useState } from 'react'

// assets
import hanger from './assets/hanger_ALPHA.png'
import shirt1 from '../../assets/clothing/mati_ALPHA.png'
import shirt2 from '../../assets/clothing/mati_ALPHA.png'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'

// styles
import './Cart.scss'

export default function Cart() {
  const [currItemInd, setCurrItemInd] = useState(0)

  const cartData = [
    {
      img: shirt1,
      price: 44,
      title: 'ITEM ONE'
    },
    {
      img: shirt2,
      price: 44,
      title: 'ITEM 2'
    },
    {
      img: shirt1,
      price: 44,
      title: 'ITEM 2'
    }
  ]

  return (
    <div className='cart-container'>
      <div className='cart-display-container'>
        <div className='cart-pole' />
        <div className='hanger-img-container'>
          <img src={hanger} alt='hanger' />
        </div>
        <div className='clothing-img-carousel-container'>
          <img src={cartData[currItemInd].img} alt={cartData[currItemInd].title}/>
        </div>

        <div className='cart-carousel-btn-container'>
          <CarouselBtn icon={"leftArrow"}/>
          <h2>{cartData[currItemInd].title}</h2>
          <CarouselBtn icon={"rightArrow"}/>
        </div>
      </div>    
    </div>
  )
}
