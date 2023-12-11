// library imports
import { useAnimation, AnimatePresence, easeIn } from 'framer-motion';
import { useEffect, useState } from 'react';
import { extractRGBValues, generateRgbaString, rgbaToRgb } from '../../../utils/general/general.utils.js';

// styled components
import {
  ProductContainer,
  ProductContainerTopFold,
  ProductHolder,
  ProductContainerBotFold,
  BotFoldCol,
  ProductImgCarousel,
  PriceAction,
  Price,
  DescriptionContainer,
  CustomGradientContainer,
  GradientBG,
  CustomControlsContainer,
  CustomizeBtnsContainer,
  CustomizeBtnContainer,
  CustomizationLabel,
  RgbDisplayContainer,
  RgbSquare,
  CustomMockupContainer,
  DesignOverlayContainer,
  GradientBox,
  ShirtMockupContainer
} from './Product.styles.js';

// components
import ImgLoader from '../../../components/img-loader/ImgLoader.js';
import PrimaryBtn from '../../../components/btns/primary-btn/PrimaryBtn';
import SizeSelection from '../../../components/size-selection/SizeSelection.js';
import ProductDisplay from '../../../components/product-display/ProductDisplay.js';

export default function Product({ product }) {

  const controlDiv2 = useAnimation();
  const controlDiv3 = useAnimation();

  const alphaEnd = 0.56;
  const alphaStart = 0.49;

  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  const [isMainProductImgLoaded, setIsMainProductImgLoaded] = useState(false);
  const [isCustomProductImgLoaded, setIsCustomProductImgLoaded] = useState(false);

  const [startColor, setStartColor] = useState(null);
  const [endColor, setEndColor] = useState(null);
  const [isFrozen, setIsFrozen] = useState(true);

  const [rightBtnLabel, setRightBtnLabel] = useState('STOP');

  const [gradientWasSelected, setGradientWasSelected] = useState(null);
  const [gradientWasChosen,setGradientWasChosen] = useState(false);

  const [customProduct, setCustomProduct] = useState(null)

  useEffect(() => {
    if (!startColor || !endColor) {
      return;
    }
    const extractedStartColor = extractRGBValues(rgbaToRgb(startColor));
    const extractedEndColor = extractRGBValues(rgbaToRgb(endColor));

    setCustomProduct(
      {
        availSizes: ['S', 'M', 'L'],
        botGradient: extractedStartColor,
        imgURL: null,
        id: `${startColor}, ${endColor}`,
        price: 35,
        quantity: 1,
        size: "TEST",
        isCustom: true,
        topGradient: extractedEndColor
      }
    )
  }, [startColor, endColor])

  const handleScroll = (view) => {
      if (view === "custom") {
        document.getElementById("customizationID").scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (view === "botFold") {
        document.getElementById("productBotFold").scrollIntoView({ behavior: "smooth" });
        return;
      }
  };

  const handleCustomizationAction = (actionTaken) => {
    if (actionTaken === "left") {
      if (gradientWasSelected === true) {
        setRightBtnLabel('STOP');
        setGradientWasSelected(null);
      };
      setIsFrozen(false)
    } else if (actionTaken === "right") {
      if (!gradientWasSelected) {
        setGradientWasSelected(true);
        setRightBtnLabel('NEXT');
      } else {
        setGradientWasChosen(true);
      };
      setIsFrozen(true);
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
    setIsMainProductImgLoaded(false);
    setIsCustomProductImgLoaded(false);
  }, [product.imgURL]);

  useEffect(() => {
    controlDiv2.set({ opacity: 0 });
    controlDiv2.start({ 
        opacity: 1, 
        transition: { duration: 0.8, delay: 0.4, ease: easeIn } 
      });
  }, [isMainProductImgLoaded, controlDiv2]);

  useEffect(() => {
    controlDiv3.set({ opacity: 0 });
    controlDiv3.start({ 
      opacity: 1, 
      transition: { duration: 0.8, delay: 0.2 } 
    });
  }, [isCustomProductImgLoaded, controlDiv3]);

  useEffect(() => {
    setInitialLoadComplete(true);
  }, []);

  return (
      <ProductContainer>
        <ProductContainerTopFold id="productTopFold">
          <ProductHolder key={product.id}>
            <ProductDisplay key={product.id} product={product} scrollToElement={handleScroll} bobs={true}/>
          </ProductHolder>
        </ProductContainerTopFold>

        {/* <ProductContainerBotFold id="productBotFold">
          <BotFoldCol>  
            <ProductImgCarousel>
              <ImgLoader src={product.imgURL} alt='product img enlarged' />
            </ProductImgCarousel>
          </BotFoldCol>
          <BotFoldCol>
            <PriceAction>
              <Price $accentCol={product.botGradient}>${product.price}</Price>
              <SizeSelection product={product} custom={true} scrollToElement={handleScroll}/>
              <DescriptionContainer>
                <ul>
                  {product.description.map(description => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </DescriptionContainer>
            </PriceAction>
          </BotFoldCol>
        </ProductContainerBotFold> */}
        <CustomGradientContainer id='customizationID'>
          <CustomControlsContainer>
              {!gradientWasChosen ? 
                  <>   
                    <CustomizeBtnsContainer>
                        <CustomizeBtnContainer onClick={() => handleCustomizationAction("left")}>
                            <PrimaryBtn label={"START"} isActive={isFrozen}/>
                        </CustomizeBtnContainer>
                        <CustomizeBtnContainer onClick={() => handleCustomizationAction("right")}>
                            <PrimaryBtn label={rightBtnLabel} isActive={!isFrozen || gradientWasSelected === true}/>
                        </CustomizeBtnContainer>
                    </CustomizeBtnsContainer>
                    <CustomizationLabel>
                      {startColor ? 
                        <RgbDisplayContainer>
                          <h3>{rgbaToRgb(endColor)}</h3>
                          <RgbSquare $bgCol={endColor}/>
                          <h3>{rgbaToRgb(startColor)}</h3>
                          <RgbSquare $bgCol={startColor}/>
                        </RgbDisplayContainer>
                        :
                        <h3>281,474,976,710,656 possibilities...find one that feels right.</h3>
                      }
                    </CustomizationLabel>
                  </>
                  :
                  <>
                    <PriceAction>
                      <Price $accentCol={customProduct.botGradient}>$35</Price>
                      <SizeSelection product={customProduct} />
                    </PriceAction>
                    
                    <h3 style={{ marginTop: "20px", textDecoration: "underline" }} onClick={() => setGradientWasChosen(false)}>BACK</h3>
                  </>

              }
          </CustomControlsContainer>
          <CustomMockupContainer>
              <DesignOverlayContainer>
                  <ImgLoader src={product.designAlpha} alt={'design'} />
                </DesignOverlayContainer>
              <GradientBox
                  animate={controlDiv3}
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
                $startColor={startColor ? extractRGBValues(rgbaToRgb(startColor)) : null}
                $endColor={endColor ? extractRGBValues(rgbaToRgb(endColor)) : null}
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