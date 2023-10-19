import { useContext } from 'react'

// styles
import './Cart.scss'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'
import Header from '../../components/header/Header'
// import NavBtn from '../../components/btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Cart() {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <Header />
      <div className='cart-display-container'>

        

        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>

        <div className='cart-carousel-btn-container'>
          <CarouselBtn icon={"leftArrow"}/>
          <h2>title</h2>
          <CarouselBtn icon={"rightArrow"}/>
        </div>

      </div>    
    </div>
  )
}
