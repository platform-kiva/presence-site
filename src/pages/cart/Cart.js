import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart, increaseItemSize, decreaseItemSize } from '../../store/cart/cart.action.js';
import { setGradient } from "../../store/gradients/gradient.action.js";
import { selectDisplayedGradient } from "../../store/gradients/gradient.selector.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";


// styles
import {
    CartContainer,
    CartHeaderContainer,
    CartItemDisplayContainer,
    CarouselBtnContainer,
    ProductControlsContainer,
    ProductControl,
    CounterContainer,
    CounterLabel,
    BtnsContainer,
    BtnContainer,
    DisplayContainer,
    EmptyCartMessageContainer,
    ControlsContainer
} from "./Cart.styles.js";

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn.js';
import CartHeader from "./cart-header/CartHeader.js";
import CircleBtn from "../../components/btns/circle-btn/CircleBtn.js";
import ElementWrapper from "../../components/element-wrapper/ElementWrapper.js";
import GradientControls from "../../components/gradient-controls/GradientControls.js";
import ShirtDisplay from "../../components/shirt-display/ShirtDisplay.js";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [cartInd, setCartInd] = useState(0);
    const displayedGradient = useSelector(selectDisplayedGradient);

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        dispatch(setGradient('A', cartItems[cartInd].gradient));
        dispatch(setGradient('B', cartItems[cartInd].gradient));
    }, [dispatch, cartInd, cartItems, displayedGradient])
  
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
  
    const handleIncreaseItemSize = () => {
      dispatch(increaseItemSize(cartItems, cartItems[cartInd]));
    }

    const handleDecreaseItemSize = () => {
      dispatch(decreaseItemSize(cartItems, cartItems[cartInd]));
    }
  
    return (
      <CartContainer>
        <CartHeaderContainer>
            <CartHeader nav={"../home"} />
        </CartHeaderContainer>

        {cartItems.length !== 0 &&
          <ControlsContainer>
            <GradientControls readOnly={true} />
          </ControlsContainer>
        }

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
            
            {cartItems.length > 1 && 
              <CarouselBtnContainer>
                  <div onClick={() => handleIndChange(-1)}>
                    <ElementWrapper>
                        <CarouselBtn icon="left" active={cartItems.length === 1 ? false : true} />
                    </ElementWrapper>
                  </div>
                  <div onClick={() => handleIndChange(1)}>
                    <ElementWrapper>
                        <CarouselBtn icon="right" active={cartItems.length === 1 ? false : true} />
                    </ElementWrapper>
                  </div> 
              </CarouselBtnContainer>
            }

            <ProductControlsContainer>
              <ElementWrapper delay={0.4}>
                <ProductControl>
                  <CounterContainer>
                    <CounterLabel>SIZE</CounterLabel>
                      <BtnsContainer>
                        <BtnContainer onClick={() => handleDecreaseItemSize()}>
                            <CircleBtn label={"-"} bg={false} isActive={true}/>
                        </BtnContainer>
                        <DisplayContainer>
                            <CircleBtn label={cartItems[cartInd].size} bg={false} isActive={false}/>
                        </DisplayContainer>
                        <BtnContainer onClick={() => handleIncreaseItemSize()}>
                            <CircleBtn label={"+"} bg={false} isActive={true}/>
                        </BtnContainer>
                      </BtnsContainer>
                  </CounterContainer>
                </ProductControl>
              </ElementWrapper>
              <ElementWrapper delay={0.4}>
                <ProductControl>
                  <CounterContainer>
                    <CounterLabel>QTY</CounterLabel>
                      <BtnsContainer>
                        <BtnContainer onClick={() => handleRemoveItemFromCart()}>
                            <CircleBtn label={"-"} bg={false} isActive={true}/>
                        </BtnContainer>
                        <DisplayContainer>
                            <CircleBtn label={cartItems[cartInd].quantity} bg={false} isActive={false}/>
                        </DisplayContainer>
                        <BtnContainer onClick={() => handleAddItemFromCart()}>
                            <CircleBtn label={"+"} bg={false} isActive={true}/>
                        </BtnContainer>
                      </BtnsContainer>
                  </CounterContainer>
                </ProductControl>
              </ElementWrapper>
            </ProductControlsContainer>       
          </>
        }
        {cartItems.length === 0 &&
          <EmptyCartMessageContainer>
            <ElementWrapper>
              <h2>CART IS EMPTY</h2>
            </ElementWrapper>
          </EmptyCartMessageContainer>
        }
      </CartContainer>
    )
  }