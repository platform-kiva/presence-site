import { useEffect, useState } from 'react';
import { useAnimation, easeIn } from 'framer-motion';

// styles
import { ProductDisplayContainer, ProductImgContainer, ProductShadow } from './ProductDisplay.styles.js';

// components
import ImgLoader from '../img-loader/ImgLoader';

export default function ProductDisplay({ product, scrollToElement=null, indSetter=null, gridViewSetter=null, bobs=false }) {
    const [isMainProductImgLoaded, setIsMainProductImgLoaded] = useState(false);

    const controlDiv1 = useAnimation();
    const controlDiv2 = useAnimation();

    useEffect(() => {
        if (!bobs) {
            return
        }
        const sequenceInitialAnimations = async () => {
          await controlDiv1.start({});
          controlDiv1.start({
            y: ["0%", "-5%", "0%"],
            transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
          });
        };
        sequenceInitialAnimations();
      }, [controlDiv1]);

    useEffect(() => {
        if (!bobs) {
            return
        }
        const sequenceInitialAnimations = async () => {
            await controlDiv2.start({});
            controlDiv2.start({
                scale: [1, 1.2, 1],
                opacity: [1, 0.33, 1],
                transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
            });
        };
        sequenceInitialAnimations();
    }, [controlDiv2]);

    useEffect(() => {
        controlDiv2.set({ opacity: 0 });
        controlDiv2.start({ 
            opacity: 1, 
            transition: { duration: 0.8, delay: 0.4, ease: easeIn } 
          });
      }, [isMainProductImgLoaded, controlDiv2]);

    const handleMouseEnter = () => {
        controlDiv1.start({ translateY: -10, scale: 1.05, transition: {duration: 0.8 } });
      };
    
      const handleMouseLeave = () => {
        controlDiv1.start({ translateY: 0, scale: 1.0, transition: {duration: 0.8 } });
      };

    const handleSelection = (productInd) => {
        if (scrollToElement) {
            scrollToElement("botFold");
            return
        }
        if (indSetter) {
            indSetter(productInd);
        }
        if (gridViewSetter) {
            gridViewSetter(false);
        }
    };
    
    return (
        <ProductDisplayContainer>
            <div onClick={() => handleSelection(product.id)}>
                <ProductImgContainer animate={controlDiv1} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    <ImgLoader src={product.imgURL} alt={'product img'} updateParent={setIsMainProductImgLoaded} />
                </ProductImgContainer>
            </div>
            
            <ProductShadow initial={{ opacity: 0 }} animate={controlDiv2} $isVisible={bobs}/>
        </ProductDisplayContainer>
    )
}