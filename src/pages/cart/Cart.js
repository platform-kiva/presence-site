import { useContext } from 'react'

// styles
import './Cart.scss'

// assets
import hanger from './assets/hanger_ALPHA.png'

// components
// import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'


export default function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <div className='cart-display-container'>
        <div className='cart-pole'>
          <div className='hanger-img-container'>
            <img src={hanger} alt='hanger' />
          </div>
        </div>

        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>

        {/* <div className='cart-carousel-btn-container'>
          <CarouselBtn icon={"leftArrow"}/>
          <h2>{cartData[currItemInd].title}</h2>
          <CarouselBtn icon={"rightArrow"}/>
        </div> */}
      </div>    
    </div>
  )
}
