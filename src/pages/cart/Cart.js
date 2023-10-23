import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

// styles
import './Cart.scss'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'
import NavBtn from '../../components/btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'

export default function Cart() {
  const { cartCount, cartItems } = useContext(CartContext)
  const [productInd, setProductInd] = useOutletContext();
  const [cartInd, setCartInd] = useState(0)

  const handleIndChange = (val) => {
    let currInd = cartInd
    if (currInd === (cartCount - 1) && val === 1) {
        currInd = 0
    } else if (currInd === 0 && val === -1) {
        currInd = cartCount - 1
    } else {
        currInd += val
    }
    setCartInd(currInd)
    console.log(productInd) // find way to delete later
  }

  useEffect(() => {
    if (cartCount !== 0) {
      setProductInd(cartItems[cartInd].id)
    }
  }, [cartCount, cartInd, cartItems, setProductInd])

  return (
    <div className='cart-container'>
      {cartCount !== 0 &&
        <>
          <div className='nav-btn-container-top'>
            <NavBtn direction={"up"} btnIcon="card"/>
          </div>

          <div className='cart-display-container'>
            {cartItems.map((item, index) => {
              if (index === cartInd) {
                return  <CartItem key={item.id} cartItem={item} cartInd={cartInd}/>
              }
              return null
            })}
          </div>    

          <div className='cart-carousel-btn-container'>
            <div onClick={() => handleIndChange(-1)}>
              <CarouselBtn icon="left" active={cartCount === 1 ? false : true} />
            </div>
            <div>
              <h2>SIZE: {cartItems[cartInd].size}</h2>
              <h3>REMOVE</h3>
            </div>

            <div onClick={() => handleIndChange(1)}>
              <CarouselBtn icon="right" active={cartCount === 1 ? false : true} />
            </div> 
          </div>

          <h1 className='cart-quantity'>CART ({cartInd + 1}/{cartCount})</h1>
          <div className='cart-item-shadow' />
        </>
      }
      {cartCount === 0 &&
        <>
          <h1>CART IS EMPTY</h1>
        </>   
      }
      <div className='nav-btn-container-bot'>
        <NavBtn direction={"down"} btnIcon="down" link={'/'}/>
      </div>
    </div>
  )
}