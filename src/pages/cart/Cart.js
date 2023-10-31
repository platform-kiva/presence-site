import { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js'
import { selectCartCount, selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js'

// styles
import {
  CartContainer,
  TopNavBtnContainer,
  CartItemDisplayContainer,
  CarouselBtnContainer,
  CartItemLabelContainer,
  CartItemDetailsContainer,
  DetailsLabel,
  CartItemIncDecContainer,
  IndDecLabel,
  CartQuantity,
  CartItemShadow,
  BotNavBtnContainer
} from './Cart.styles.js'

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn'
import CartItem from './cart-item/CartItem'
import NavBtn from '../../components/btns/nav-btn/NavBtn'

export default function Cart() {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const cartTotal = useSelector(selectCartTotal)
  const cartItems = useSelector(selectCartItems)
  
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
    setProductInd(cartItems[currInd].id)
  }

  const handleAddItemFromCart = () => {
    dispatch(addItemToCart(cartItems, cartItems[cartInd], cartItems[cartInd].size))
  }

  const handleRemoveItemFromCart = () => {
    if (cartInd === cartItems.length - 1 && cartItems[cartInd].quantity === 1) {
      const indToRemove = cartInd
      const newCartInd = cartInd - 1
      setCartInd(newCartInd)
      dispatch(removeItemFromCart(cartItems, cartItems[indToRemove]))
    } else {
      dispatch(removeItemFromCart(cartItems, cartItems[cartInd]))
    }
  }

  useEffect(() => {
    if (cartItems.length !== 0 && cartItems[cartInd]) {
      setProductInd(cartItems[cartInd].id)
    }
  }, [cartInd, cartItems, setProductInd])

  return (
    <CartContainer>
      {cartItems.length !== 0 && cartItems[cartInd] &&
        <>
          <TopNavBtnContainer>
            <NavBtn direction={"up"} btnIcon="card"/>
          </TopNavBtnContainer>

          <CartItemDisplayContainer>
            {cartItems.map((item, index) => {
              if (index === cartInd) {
                return  <CartItem key={item.id} cartItem={item} cartInd={cartInd}/>
              }
              return null
            })}
          </CartItemDisplayContainer>    

          <CarouselBtnContainer>
            <div onClick={() => handleIndChange(-1)}>
              <CarouselBtn icon="left" active={cartItems.length === 1 ? false : true} />
            </div>
            <CartItemLabelContainer>
              <CartItemDetailsContainer>
                <DetailsLabel>SIZE: {cartItems[cartInd].size}</DetailsLabel>
                <DetailsLabel>QUANTITY: {cartItems[cartInd].quantity}</DetailsLabel>
              </CartItemDetailsContainer>
            </CartItemLabelContainer>
            
            <div onClick={() => handleIndChange(1)}>
              <CarouselBtn icon="right" active={cartItems.length === 1 ? false : true} />
            </div> 
          </CarouselBtnContainer>
          <CartItemIncDecContainer>
            <IndDecLabel onClick={() => handleRemoveItemFromCart()}>REMOVE</IndDecLabel>
            <IndDecLabel onClick={() => handleAddItemFromCart()}>ADD</IndDecLabel>
          </CartItemIncDecContainer>

          <CartQuantity>CART: {cartCount} / ${cartTotal}</CartQuantity>
          <CartItemShadow></CartItemShadow>
        </>
      }
      {cartItems.length === 0 &&
        <>
          <h1>CART IS EMPTY</h1>
        </>   
      }
      <BotNavBtnContainer>
        <NavBtn direction={"down"} btnIcon="down" link={'/'}/>
      </BotNavBtnContainer>
    </CartContainer>
  )
}