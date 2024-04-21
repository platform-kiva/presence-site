import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { setGradient } from "../../store/gradients/gradient.action";
import { selectDisplayedGradient } from "../../store/gradients/gradient.selector";
import { selectCartItems } from "../../store/cart/cart.selector";


// styles
import {
    CartContainer,
    CartHeaderContainer,
    CartItemDisplayContainer,
    CarouselBtnContainer,
    QuantityControl,
    CartItemLabelContainer,
    DetailsLabel,
    CartItemIncDecContainer,
    IndDecLabel,
    EmptyCartMessageContainer
} from "./Cart.styles";

// components
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import CartHeader from "./cart-header/CartHeader";
import ElementWrapper from "../../components/element-wrapper/ElementWrapper";
import ShirtDisplay from "../../components/shirt-display/ShirtDisplay";
import GradientControls from "../../components/gradient-controls/GradientControls";


export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const [cartInd, setCartInd] = useState(0);
    const displayedGradient = useSelector(selectDisplayedGradient);

    useEffect(() => {
        if (cartItems.length === 0) {
            return;
        }
        console.log(cartItems[cartInd].gradient);
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
  
    useEffect(() => {
      if (cartItems.length !== 0 && cartItems[cartInd]) {
      }
    }, [cartInd, cartItems])
  
    return (
      <CartContainer>
        <CartHeaderContainer>
            <CartHeader nav={"/home"} />
        </CartHeaderContainer>

        {cartItems.length !== 0 &&
            <GradientControls readOnly={true} />
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

            <QuantityControl>
                <CartItemLabelContainer>
                    <DetailsLabel>SIZE: {cartItems[cartInd].size}&ensp;/&ensp;QUANTITY: {cartItems[cartInd].quantity}</DetailsLabel>
                </CartItemLabelContainer>
                <CartItemIncDecContainer>
                    <IndDecLabel onClick={() => handleRemoveItemFromCart()}>remove -1</IndDecLabel>
                    <IndDecLabel onClick={() => handleAddItemFromCart()}>add +1</IndDecLabel>
                </CartItemIncDecContainer>
            </QuantityControl>
            
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