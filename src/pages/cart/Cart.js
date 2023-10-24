import { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'

// styles
import './Cart.scss'

// assets
import cursorIconFilled from '../../assets/icons/cursor_filled.png'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'
import NavBtn from '../../components/btns/nav-btn/NavBtn'

// context
import { CartContext } from '../../contexts/cart-context/CartContext'
import { ProductsContext } from '../../contexts/products-context/ProductsContext'

export default function Cart() {
  const { cartCount, cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  const [productInd, setProductInd] = useOutletContext();
  const [cartInd, setCartInd] = useState(0)

  const handleIndChange = (val) => {
    let currInd = cartInd
    if (currInd === (cartItems.length - 1) && val === 1) {
        currInd = 0
    } else if (currInd === 0 && val === -1) {
        currInd = cartItems.length - 1
    } else {
        currInd += val
    }
    setCartInd(currInd)
    setProductInd(currInd)
  }

  const handleCartItemRemoval = () => {
    if (cartInd === cartItems.length - 1 && cartItems[cartInd].quantity === 1) {
      const indToRemove = cartInd
      const newCartInd = cartInd - 1
      setCartInd(newCartInd)
      removeItemFromCart(cartItems[indToRemove])
    } else {
      removeItemFromCart(cartItems[cartInd])
    }
  }

  const handleCartItemAdd = () => {
    addItemToCart(products[productInd], cartItems[cartInd].size)
  }

  useEffect(() => {
    if (cartItems.length !== 0 && cartItems[cartInd]) {
      setProductInd(cartItems[cartInd].id)
    }
  }, [cartInd, cartItems, setProductInd])

  return (
    <div className='cart-container'>
      {cartItems.length !== 0 && cartItems[cartInd] &&
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
              <CarouselBtn icon="left" active={cartItems.length === 1 ? false : true} />
            </div>
            <div className='cart-carousel-item-label-container'>
              <div className='cart-item-details-container'>
                <h2>SIZE: {cartItems[cartInd].size}</h2>
                <h2>QUANTITY: {cartItems[cartInd].quantity}</h2>
              </div>
            </div>
            
            <div onClick={() => handleIndChange(1)}>
              <CarouselBtn icon="right" active={cartItems.length === 1 ? false : true} />
            </div> 
          </div>
          <div className='cart-item-inc-dec-container'>
            <h3 onClick={() => handleCartItemRemoval()} style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>REMOVE</h3>
            <h3 onClick={() => handleCartItemAdd()} style={{ cursor: `url(${cursorIconFilled}) 15 15, auto`}}>ADD</h3>
          </div>

          <h1 className='cart-quantity'>CART: {cartCount}</h1>
          <div className='cart-item-shadow' />
        </>
      }
      {cartItems.length === 0 &&
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