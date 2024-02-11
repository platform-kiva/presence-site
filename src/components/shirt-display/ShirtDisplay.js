import { useEffect, useState } from 'react';
import { easeIn, useAnimation } from 'framer-motion';

// styles
import {
  ShirtDisplayContainer,
  ShirtImgDisplayContainer,
  ProductShadow
} from './ShirtDisplay.styles.js'

// compoments
import ShirtImgDisplay from '../shirt-img-display/ShirtImgDisplay.js';

export default function ShirtDisplay({ product, bobs=false }) {
  const [blankAlphaLoaded, setBlankAlphaLoaded] = useState(false)

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
    }, [blankAlphaLoaded, controlDiv2]);

  return (
    <ShirtDisplayContainer>
      <ShirtImgDisplayContainer animate={controlDiv1}>
        <ShirtImgDisplay  product={product} startColor={null} endColor={null} alphaStart={0.49} alphaEnd={0.56} updateParent={setBlankAlphaLoaded}/>
      </ShirtImgDisplayContainer>
      <ProductShadow initial={{ opacity: 0 }} animate={controlDiv2} $isVisible={bobs}/>
    </ShirtDisplayContainer>
  )
}
