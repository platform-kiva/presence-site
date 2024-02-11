import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

// styles
import {
  CartContainer,
  CartItemDisplayContainer,
  CarouselBtnContainer,
  CartItemLabelContainer,
  CartItemDetailsContainer,
  DetailsLabel,
  CartItemIncDecContainer,
  IndDecLabel,
  GradientBG,
  CartDetailsContainer
} from './Cart.styles.js';

// components
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import ShirtDisplay from '../../components/shirt-display/ShirtDisplay.js';
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  
  const [cartInd, setCartInd] = useState(0);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

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
    }
  }, [cartInd, cartItems])

  return (
    <CartContainer>
      {cartItems.length !== 0 && cartItems[cartInd] &&
        <>
          <CartItemDisplayContainer>
            {cartItems.map((product, index) => {
                if (index === cartInd) {
                  return (
                    <ShirtDisplay key={`${product.topGradient}, ${product.botGradient}`} product={product} startColor={product.topGradient} endColor={product.botGradient} alphaStart={0.49} alphaEnd={0.56} bobs={true}/>
                  );
                }
                return null
              })
            }
          </CartItemDisplayContainer>    

          
              <CarouselBtnContainer>
                
                <div onClick={() => handleIndChange(-1)}>
                  <ElementWrapper>
                    <CarouselBtn icon="left" active={cartItems.length === 1 ? false : true} />
                  </ElementWrapper>
                </div>
                
                <ElementWrapper delay={0.4}>
                  <CartItemLabelContainer>
                    <CartItemDetailsContainer>
                      <DetailsLabel>SIZE: {cartItems[cartInd].size}</DetailsLabel>
                      <DetailsLabel>QUANTITY: {cartItems[cartInd].quantity}</DetailsLabel>
                    </CartItemDetailsContainer>
                  </CartItemLabelContainer>
                </ElementWrapper>
                
                <div onClick={() => handleIndChange(1)}>
                  <ElementWrapper>
                    <CarouselBtn icon="right" active={cartItems.length === 1 ? false : true} />
                  </ElementWrapper>
                </div> 
                
              </CarouselBtnContainer>
            
            <CartItemIncDecContainer>
              <ElementWrapper delay={0.4}>
                <IndDecLabel onClick={() => handleRemoveItemFromCart()}>REMOVE</IndDecLabel>
              </ElementWrapper>
              
              <ElementWrapper delay={0.4}>
                <IndDecLabel onClick={() => handleAddItemFromCart()}>ADD</IndDecLabel>
              </ElementWrapper>
              
            </CartItemIncDecContainer>
  
            <CartDetailsContainer>
              <div onClick={() => navigate("/checkout")}>
                <ElementWrapper delay={0.4}>
                  <PrimaryBtn label={"GO TO CHECKOUT"}/>
                </ElementWrapper>
              </div>
            </CartDetailsContainer>
        </>
      }
      {cartItems.length === 0 &&
        <h2>CART IS EMPTY</h2>
      }

      <AnimatePresence>
        <GradientBG
          key={cartInd}
          $cartItems={cartItems}
          $cartInd={cartInd}
          initial={initialLoadComplete ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </CartContainer>
  )
}