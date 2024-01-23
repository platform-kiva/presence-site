import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartCount, selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

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
  CartQuantity,
  GradientBG,
  CartDetailsContainer
} from './Cart.styles.js';


// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import CustomShirtDisplay from '../../components/custom-shirt-display/CustomShirtDisplay.js';
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
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
            {cartItems.map((item, index) => {
                if (index === cartInd) {
                  return (
                    <CustomShirtDisplay key={`${item.topGradient}, ${item.botGradient}`} product={item} bobs={true}/>
                  );
                }
                return null
              })
            }
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

          <CartDetailsContainer>
            <div onClick={() => navigate("/checkout")}>
              <PrimaryBtn label={"GO TO CHECKOUT"}/>
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