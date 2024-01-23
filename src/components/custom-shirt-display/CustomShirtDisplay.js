import { useEffect, useState } from 'react'
import { easeIn, useAnimation } from 'framer-motion'

// styles
import {
  CustomShirtContainer,
  CustomShirtImgContainer,
  CustomGradient,
  ProductShadow
} from './CustomShirtDisplay.styles.js'

// assets
import blankAlpha from '../../assets/clothing/blank_ALPHA.png'

// compoments
import ImgLoader from '../../components/img-loader/ImgLoader'


export default function CustomShirtDisplay({ product, bobs=false }) {
  const [blankAlphaLoaded, setBlankAlphaLoaded] = useState(false)

  const controlDiv1 = useAnimation();
  const controlDiv2 = useAnimation();
  const controlDiv3= useAnimation();

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
      controlDiv3.set({ opacity: 0});
      controlDiv2.start({ 
          opacity: 1, 
          transition: { duration: 0.8, delay: 0.4, ease: easeIn } 
        });
      controlDiv3.start({ 
        opacity: 1, 
        transition: { duration: 0.4, delay: 0.1, ease: easeIn } 
      });
    }, [blankAlphaLoaded, controlDiv2]);

  return (
    <CustomShirtContainer>
      <CustomShirtImgContainer animate={controlDiv1}>
        <CustomGradient
          animate={controlDiv3}
          $topGradient={product.topGradient}
          $botGradient={product.botGradient}
        />
        <ImgLoader src={blankAlpha} alt={"custom product"} updateParent={setBlankAlphaLoaded}/>
      </CustomShirtImgContainer>

      <ProductShadow initial={{ opacity: 0 }} animate={controlDiv2} $isVisible={bobs}/>
    </CustomShirtContainer>
  )
}
