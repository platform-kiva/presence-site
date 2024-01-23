import { useEffect, useState } from 'react';
import { useAnimation, easeIn } from 'framer-motion';

// styles
import { ProductDisplayContainer, ProductImgContainer, ProductShadow } from './ProductDisplay.styles.js';

// components
import CustomShirtDisplay from '../custom-shirt-display/CustomShirtDisplay.js';

export default function ProductDisplay({ product, bobs=false }) {
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
      }, [controlDiv1, bobs]);

    useEffect(() => {
        if (!bobs) {
            return
        }
        const sequenceInitialAnimations = async () => {
            await controlDiv2.start({});
            controlDiv2.start({
                scale: [1, 1.2, 1],
                opacity: [0, 0.33, 1],
                transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
            });
        };
        sequenceInitialAnimations();
    }, [controlDiv2, bobs]);

    useEffect(() => {
        controlDiv2.set({ opacity: 0 });
        controlDiv2.start({ 
            opacity: 1, 
            transition: { duration: 0.8, delay: 0.4, ease: easeIn } 
          });
      }, [isMainProductImgLoaded, controlDiv2]);
    
    return (
        <ProductDisplayContainer>
            <ProductImgContainer animate={controlDiv1} >
                <CustomShirtDisplay product={product}/>
            </ProductImgContainer>
            
            <ProductShadow initial={{ opacity: 0 }} animate={controlDiv2} $isVisible={bobs}/>
        </ProductDisplayContainer>
    )
}