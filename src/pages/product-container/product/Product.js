// library imports
import { useAnimation, AnimatePresence, easeIn } from 'framer-motion';
import { useEffect, useState } from 'react';
import { extractRGBValues, generateRgbaString, rgbaToRgb } from '../../../utils/general/general.utils.js';

// styled components
import {
  ProductContainer,
  PriceAction,
  CustomGradientContainer,
  GradientBG,
  CustomControlsContainer,
  CustomizeBtnsContainer,
  CustomizeBtnContainer,
  CustomizationLabel,
  PriceActionCustomContainer,
  RgbDisplayContainer,
  RgbDisplay,
  RgbSquare,
  DescriptionContainer,
  PromptContainer,
  ShirtImgDisplayContainer
} from './Product.styles.js';

// components
import ElementWrapper from '../../../components/element-wrapper/ElementWrapper.js';
import PrimaryBtn from '../../../components/btns/primary-btn/PrimaryBtn';
import SizeSelection from '../../../components/size-selection/SizeSelection.js';
import ShirtImgDisplay from '../../../components/shirt-img-display/ShirtImgDisplay.js';

export default function Product({ product }) {

  const controlDiv2 = useAnimation();
  const controlDiv3 = useAnimation();

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
        blankProductURL: product.blankProductURL,
        id: `${startColor}, ${endColor}`,
        price: 35,
        quantity: 1,
        size: "TEST",
        isCustom: true,
        topGradient: extractedEndColor
      }
    )
  }, [startColor, endColor, product.blankProductURL])

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
            setStartColor(generateRgbaString(0.6));
            setEndColor(generateRgbaString(0.6));
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
        <CustomGradientContainer>
          <CustomControlsContainer>
              {!gradientWasChosen ? 
                  <>         
                    <CustomizeBtnsContainer>
                      <ElementWrapper> 
                        <CustomizeBtnContainer onClick={() => handleCustomizationAction("left")}>
                            <PrimaryBtn label={"START"} isActive={isFrozen}/>
                        </CustomizeBtnContainer>
                      </ElementWrapper>
                      <ElementWrapper>
                        <CustomizeBtnContainer onClick={() => handleCustomizationAction("right")}>
                            <PrimaryBtn label={rightBtnLabel} isActive={!isFrozen || gradientWasSelected === true}/>
                        </CustomizeBtnContainer>
                      </ElementWrapper>
                    </CustomizeBtnsContainer>  
                    <CustomizationLabel>
                      {startColor ? 
                        <ElementWrapper delay={0.4}>      
                          <RgbDisplayContainer>
                            <RgbDisplay>
                              <h3>{rgbaToRgb(endColor)}</h3>
                              <RgbSquare $bgCol={endColor}/>
                            </RgbDisplay>
                            <RgbDisplay>
                              <h3>{rgbaToRgb(startColor)}</h3>
                              <RgbSquare $bgCol={startColor}/>
                            </RgbDisplay>
                          </RgbDisplayContainer>
                        </ElementWrapper>
                        :
                        <ElementWrapper delay={0.4}>
                          <PromptContainer>
                            <h3>281,474,976,710,656 possibilities...</h3>
                            <h3>Find one that feels right.</h3>
                          </PromptContainer>
                        </ElementWrapper>
                      }
                    </CustomizationLabel>
                  </>
                  :
                  <ElementWrapper>
                    <PriceActionCustomContainer>
                      <>
                        <PriceAction>
                          <SizeSelection product={customProduct} />
                        </PriceAction>
                        <h3 className='back-btn' onClick={() => setGradientWasChosen(false)}>BACK</h3>
                      </>
                    </PriceActionCustomContainer>
                  </ElementWrapper>
              }
          </CustomControlsContainer>

          <ShirtImgDisplayContainer>
            <ShirtImgDisplay product={product} startColor={startColor} endColor={endColor} alphaStart={0.49} alphaEnd={0.56}/>
          </ShirtImgDisplayContainer>
          
          <DescriptionContainer>
            <ul>
              <li>100% ring-spun cotton</li>
              <li>Garment-dyed, pre-shrunk fabric</li>
              <li>Relaxed fit</li>
              <li>7/8″ double-needle topstitched collar</li>
              <li>Twill-taped neck and shoulders for extra durability</li>
              <li>Double-needle armhole, sleeve, and bottom hems</li>
              <li>Signature twill label</li>
            </ul>
          </DescriptionContainer>
          
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