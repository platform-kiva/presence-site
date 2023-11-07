import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../store/cart/cart.action.js';
import { selectCartItems } from '../../../store/cart/cart.selector.js';

// styles
import {
  ProductContainer,
  ProductContainerTopFold,
  ProductImgContainer,
  ProductShadow,
  ProductContainerBotFold,
  BotFoldCol,
  ProductImgCarousel,
  ProductCarouselImgContainer,
  PriceAction,
  Price,
  ActionContainer,
  SizesContainer,
  DescriptionContainer
} from './Product.styles.js';

// components
import PrimaryBtn from '../../../components/btns/primary-btn/PrimaryBtn';
import SizeBtn from '../../../components/btns/size-btn/SizeBtn.js';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [activeSize, setActiveSize] = useState(null);
  const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART');
  const [timerRunning, setTimerRunning] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const handleSizeSelection = (size) => {
    setActiveSize(size);
  };

  const controlDiv1 = useAnimation();
  const controlDiv2 = useAnimation();

  const handleMouseEnter = () => {
    controlDiv1.start({ translateY: -10, scale: 1.05, transition: {duration: 0.8 } });
    controlDiv2.start({ scale: 1.05, transition: {duration: 0.8 } });
  };

  const handleMouseLeave = () => {
    controlDiv1.start({ translateY: 0, scale: 1.0, transition: {duration: 0.8 } });
    controlDiv2.start({ scale: 1.0, transition: {duration: 0.8 } });
  };
  
  useEffect(() => {
    setIsImageLoaded(false);
  }, [product.imgURL]);

  useEffect(() => {
    controlDiv1.set({ scale: 0.9, opacity: 0, zIndex: -1 });
    controlDiv2.set({ scale: 0.9, opacity: 0, zIndex: -1 });
    if (isImageLoaded) {
      controlDiv1.start({
        scale: 1,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 0.5, type: 'spring' },
      });
      controlDiv2.start({
        scale: 1,
        opacity: 1,
        zIndex: 1,
        transition: { duration: 0.5, type: 'spring' },
      });
    }
  }, [isImageLoaded, controlDiv1, controlDiv2]);


  const addProductToCart = () => {
    try {
      if (timerRunning) {
        return;
      };
      if (activeSize !== null) {
        dispatch(addItemToCart(cartItems, product, activeSize));
        setPrimaryBtnLabel('ADDED TO CART!');
        setTimerRunning(true);
        setTimeout(() => {
          setPrimaryBtnLabel('ADD TO CART');
          setTimerRunning(false);
        }, 2000);
      };
    } catch (error) {
      console.log("Item was not added to cart.");
    };
  };

  return (
      <ProductContainer>
        <ProductContainerTopFold id="productTopFold">
          <ProductImgContainer
            initial={{ scale: 0.75, z: -100, opacity: 0 }}
            animate={controlDiv1}
            src={product.imgURL}
            alt={`product image`}
            onLoad={() => setIsImageLoaded(true)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <ProductShadow
            animate={controlDiv2}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </ProductContainerTopFold>
        <ProductContainerBotFold id="productBotFold">
          <BotFoldCol>  
            <ProductImgCarousel>
              <ProductCarouselImgContainer src={product.imgURL} alt='product img enlarged'/>
            </ProductImgCarousel>
          </BotFoldCol>
          
          <BotFoldCol>
            <PriceAction>
              <Price $accentCol={product.botGradient}>${product.price}</Price>
              <ActionContainer>
                <SizesContainer>
                  {product.availSizes.map(size => (
                    <div key={size} onClick={() => handleSizeSelection(size)}>
                      <SizeBtn size={size} accentCol={product.botGradient} selectedSize={activeSize} />
                    </div>
                  ))}
                </SizesContainer>
                <div onClick={() => addProductToCart(product, activeSize)}>
                  <PrimaryBtn label={primaryBtnLabel} accentCol={product.botGradient} isActive={activeSize !== null}/>
                </div>
              </ActionContainer>
              <DescriptionContainer>
                <ul>
                  {product.description.map(description => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </DescriptionContainer>
            </PriceAction>
          </BotFoldCol>
        </ProductContainerBotFold>
      </ProductContainer>
  );
};