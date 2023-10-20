import { useContext } from 'react'

// styles
import './Cart.scss'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'
import NavBtn from '../../components/btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Cart() {
  const { cartItems } = useContext(CartContext)
  // const item =
  //   {
  //     "id": 2,
  //     "img": "https://firebasestorage.googleapis.com/v0/b/presence-c795d.appspot.com/o/Water_Sized_ALPHA.png?alt=media&token=e216e921-ec63-4710-abf8-35fa18f008eb&_gl=1*1wr16n*_ga*MTg4NjU4OTE3Mi4xNjk3NTE0Nzgz*_ga_CW55HF8NVT*MTY5Nzc0NTYyNC4zLjEuMTY5Nzc0NTY5NC42MC4wLjA.",
  //     "price": 43,
  //     "availSizes": ["S", "M", "L"],
  //     "topGradient": [230, 169, 89],
  //     "botGradient": [47, 117, 180]
  //   }

  return (
    <div className='cart-container'>
      {cartItems.length !== 0 &&
        <>
          <div className='nav-btn-container-top'>
            <NavBtn direction={"up"} btnIcon="card"/>
          </div>

          <div className='cart-display-container'>
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
            {/* <CartItem cartItem={item} /> */}
          </div>    

          <div className='cart-carousel-btn-container'>
            <CarouselBtn icon="left" />
            <h2>REMOVE</h2>
            <CarouselBtn icon="right" />
          </div>

          <h1 className='cart-quantity'>CART (3)</h1>
          <div className='cart-item-shadow' />
        </>
      }
      {cartItems.length === 0 &&
        <>
          <h1>CART IS EMPTY</h1>
        </>   
      }
      <div className='nav-btn-container-bot'>
        <NavBtn direction={"down"} btnIcon="down"/>
      </div>
    </div>
  )
}