import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

// styles
import {
  CartContainer,
  EmptyCartContent,
  ProductBox,
  InfoBtnContainer,
  ProductInfo,
  CartItemDisplayContainer,
  CarouselBtnContainer,
  CartItemLabelContainer,
  CartItemDetailsContainer,
  DetailsLabel,
  CartItemIncDecContainer,
  IndDecLabel,
  CartDetailsContainer
} from './Cart.styles.js';

// assets
import infoIcon from '../../assets/icons/info-icon.svg';

// components
import ElementWrapper from '../../components/element-wrapper/ElementWrapper.js';
import CarouselBtn from '../../components/btns/carousel-btn/CarouselBtn';
import ShirtDisplay from '../../components/shirt-display/ShirtDisplay.js';
import PrimaryBtn from '../../components/btns/primary-btn/PrimaryBtn.js';
import GradientControls from '../../components/gradient-controls/GradientControls.js';
import ShirtImgDisplay from '../../components/shirt-img-display/ShirtImgDisplay.js';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const [cartInd, setCartInd] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

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

  const handleClick = () => {
    setAddedToCart(!addedToCart)
    console.log(addedToCart ? 'TRUE' : 'FALSE');
  }

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
            <ElementWrapper>
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
            <ElementWrapper>
              <IndDecLabel onClick={() => handleRemoveItemFromCart()}>REMOVE</IndDecLabel>
            </ElementWrapper>
            <ElementWrapper>
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
        <>
          <EmptyCartContent>
            <ProductBox>
              <InfoBtnContainer>
                <img src={infoIcon} alt='more info' />
              </InfoBtnContainer>

              {!addedToCart ?
              <>
                <div style={{ width: '75%' }}>
                  <ShirtImgDisplay />
                </div>

                <ProductInfo>
                    <h2 style={{ fontSize: '24px' }}>T-Shirt ($30)</h2>
                </ProductInfo>
              </>
              :
              <>
                <h3>Gotcha.</h3>
              </>
            }
              <div style={{ width: '200px' }} onClick={handleClick}>
                <ElementWrapper>
                  <PrimaryBtn label={addedToCart ? 'BACK' : 'ADD TO CART'} />
                </ElementWrapper>
              </div>
            
            </ProductBox>
          </EmptyCartContent>
        </>
      }
      <GradientControls />
    </CartContainer>
  )
}