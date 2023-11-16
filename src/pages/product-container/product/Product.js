import { useAnimation, AnimatePresence, easeIn } from 'framer-motion';
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
  PriceAction,
  Price,
  ActionContainer,
  SizesContainer,
  DescriptionContainer,
  CustomGradientContainer,
  GradientBG,
  TopNavBtnContainer,
  CustomControlsContainer,
  CustomizeBtnsContainer,
  CustomizeBtnContainer,
  RgbDisplayContainer,
  RgbSquare,
  CustomMockupContainer,
  DesignOverlay,
  GradientBox,
  ShirtMockupContainer
} from './Product.styles.js';

// assets
import design_ALPHA from './assets/mati-eye-placement-ALPHA.png';

// components
import ImgLoader from '../../../components/img-loader/ImgLoader.js';
import NavBtn from '../../../components/btns/nav-btn/NavBtn.js';
import PrimaryBtn from '../../../components/btns/primary-btn/PrimaryBtn';
import SizeBtn from '../../../components/btns/size-btn/SizeBtn.js';
import SizeSelection from './components/size-selection/SizeSelection.js';

const getRandomRgbValue = () => Math.floor(Math.random() * 256);
const generateRgbaString = (alpha) => {
    return `rgba(${getRandomRgbValue()}, ${getRandomRgbValue()}, ${getRandomRgbValue()}, ${alpha})`
};

export default function Product({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [activeSize, setActiveSize] = useState(null);
  const [primaryBtnLabel, setPrimaryBtnLabel] = useState('ADD TO CART');
  const [timerRunning, setTimerRunning] = useState(false);
  const alphaStart = 0.49;
  const alphaEnd = 0.56;
  const [startColor, setStartColor] = useState(null);
  const [endColor, setEndColor] = useState(null);
  const [isFrozen, setIsFrozen] = useState(true);
  const [leftBtnLabel, setLeftBtnLabel] = useState('START');
  const [rightBtnLabel, setRightBtnLabel] = useState('STOP');
  const [gradientWasSelected, setGradientWasSelected] = useState(null)
  const [gradientWasChosen,setGradientWasChosen] = useState(false)
  const [initialLoadComplete, setInitialLoadComplete] = useState(false)
  const [isMainProductImgLoaded, setIsMainProductImgLoaded] = useState(false)
  const [isCustomProductImgLoaded, setIsCustomProductImgLoaded] = useState(false)
  
  const handleScroll = (view) => {
      if (view === "custom") {
        const customizationElement = document.getElementById("customizationID");
        customizationElement.scrollIntoView({ behavior: "smooth" });
      } else if (view === "botFold") {
        const productBotFoldElement = document.getElementById("productBotFold");
        productBotFoldElement.scrollIntoView({ behavior: "smooth" });
      }

  };
  
  const handleSizeSelection = (size) => {
    setActiveSize(size);
  };

  const controlDiv1 = useAnimation();
  const controlDiv2 = useAnimation();
  const controlDiv3 = useAnimation();
  const controlDiv4 = useAnimation();

  const handleMouseEnter = () => {
    controlDiv1.start({ translateY: -10, scale: 1.05, transition: {duration: 0.8 } });
    controlDiv2.start({ scale: 1.05, transition: {duration: 0.8 } });
  };

  const handleMouseLeave = () => {
    controlDiv1.start({ translateY: 0, scale: 1.0, transition: {duration: 0.8 } });
    controlDiv2.start({ scale: 1.0, transition: {duration: 0.8 } });
  };

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

  useEffect(() => {
    if (!isFrozen) { 
        const interval = setInterval(() => {
            setStartColor(generateRgbaString(alphaStart));
            setEndColor(generateRgbaString(alphaEnd));
        }, 2000);
        return () => clearInterval(interval);
    }
  }, [isFrozen]);

  useEffect(() => {
    setIsMainProductImgLoaded(false)
    setIsCustomProductImgLoaded(false)
  }, [product.imgURL])

  useEffect(() => {
    controlDiv2.set({ opacity: 0 });
    controlDiv2.start({ 
        opacity: 1, 
        transition: { duration: 0.8, delay: 0.4, ease: easeIn } 
      });
  }, [isMainProductImgLoaded, controlDiv2]);

  useEffect(() => {
    controlDiv3.set({ opacity: 0 });
    controlDiv4.set({ opacity: 0 });
    controlDiv3.start({ 
        opacity: 1, 
        transition: { duration: 0.8, delay: 0.2, ease: easeIn } 
    });
    controlDiv4.start({ 
      opacity: 1, 
      transition: { duration: 0.8, delay: 0.2 } 
    });
  }, [isCustomProductImgLoaded, controlDiv3, controlDiv4]);

  function rgbaToRgb(rgbaString) {
      const rgbaRegex = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*\.?\d+)\)$/;
      const rgbString = rgbaString.replace(rgbaRegex, 'rgb($1, $2, $3)');
      return rgbString;
  }

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

  const handleAction = (actionTaken) => {
      if (actionTaken === "left") {
          if (gradientWasSelected === true) {
              setRightBtnLabel('STOP')
              setGradientWasSelected(null)
          }
          setIsFrozen(false)
      } else if (actionTaken === "right") {
          if (!gradientWasSelected) {
              setGradientWasSelected(true)
              setLeftBtnLabel('START OVER')
              setRightBtnLabel('NEXT')
          } else {
              console.log('proceed with sizeselection')
              setGradientWasChosen(true)
          }
          setIsFrozen(true)
      }
  }

  return (
      <ProductContainer>
        <ProductContainerTopFold id="productTopFold">
          <ProductImgContainer animate={controlDiv1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ImgLoader src={product.imgURL} alt={'product img'} updateParent={setIsMainProductImgLoaded} />
          </ProductImgContainer>
          <ProductShadow animate={controlDiv2} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </ProductContainerTopFold>
        <ProductContainerBotFold id="productBotFold">
          <BotFoldCol>  
            <ProductImgCarousel>
              <ImgLoader src={product.imgURL} alt='product img enlarged' />
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
                <div onClick={() => handleScroll("custom")}>
                  <PrimaryBtn label={"CREATE CUSTOM"} accentCol={product.botGradient} />
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
        <CustomGradientContainer id='customizationID'>
            <TopNavBtnContainer onClick={() => handleScroll("botFold")}>
                <NavBtn direction={"up"} btnIcon="up" />
            </TopNavBtnContainer>

            <CustomControlsContainer>
                {!gradientWasChosen ? 
                    <>   
                        <CustomizeBtnsContainer>
                            <CustomizeBtnContainer onClick={() => handleAction("left")}>
                                <PrimaryBtn label={leftBtnLabel} isActive={isFrozen}/>
                            </CustomizeBtnContainer>
                            <CustomizeBtnContainer onClick={() => handleAction("right")}>
                                <PrimaryBtn label={rightBtnLabel} isActive={!isFrozen || gradientWasSelected === true}/>
                            </CustomizeBtnContainer>
                        </CustomizeBtnsContainer>
                    
                        {startColor &&
                        <RgbDisplayContainer>
                          <h3>{rgbaToRgb(endColor)}</h3>
                          <RgbSquare style={{ backgroundColor: `${endColor}`, border: '1px solid #FFFFFF'}} />
                          <h3>{rgbaToRgb(startColor)}</h3>
                          <RgbSquare style={{ backgroundColor: `${startColor}`, border: '1px solid #FFFFFF'}} />
                        </RgbDisplayContainer>
                        }
                        {!startColor &&
                          <h3 style={{ fontSize: "20px"}}>281,474,976,710,656 possible combinations, choose one that speaks to you.</h3>
                        }

                    </>
                    :
                    <SizeSelection product={product}/>
                }
            </CustomControlsContainer>
            <CustomMockupContainer>
                <DesignOverlay animate={controlDiv3} src={design_ALPHA} alt='alpha design' />
                <GradientBox
                    animate={controlDiv4}
                    style={{
                        background: `linear-gradient(0deg, ${startColor === null ? `rgba(${product.botGradient[0]}, ${product.botGradient[1]}, ${product.botGradient[2]}, ${alphaStart})` : startColor} 0%, ${endColor === null ? `rgba(${product.topGradient[0]}, ${product.topGradient[1]}, ${product.topGradient[2]}, ${alphaStart})` : endColor} 100%)`
                    }}
                />
                <ShirtMockupContainer>
                    <ImgLoader src={product.blankProductURL} alt={"blank custom"} updateParent={setIsCustomProductImgLoaded}/>
                </ShirtMockupContainer>         
            </CustomMockupContainer>
              <AnimatePresence>
                  <GradientBG
                    key={1}
                    $startColor={startColor}
                    $endColor={endColor}
                    initial={initialLoadComplete ? { opacity: 0 } : { opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  />
              </AnimatePresence>
        </CustomGradientContainer>
      </ProductContainer>
  );
};