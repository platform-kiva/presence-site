import { useEffect, useState } from 'react'
import { easeIn, useAnimation } from 'framer-motion'

// styles
import {
  CustomShirtContainer,
  CustomShirtImgContainer,
  DesignAlphaImgContainer,
  CustomGradient
} from './CustomShirtDisplay.styles.js'

// assets
import blankAlpha from '../../assets/clothing/blank_ALPHA.png'
import designAlpha from '../../assets/clothing/design_ALPHA.png'

// compoments
import ImgLoader from '../../components/img-loader/ImgLoader'


export default function CustomShirtDisplay({ product }) {
  const [blankAlphaLoaded, setBlankAlphaLoaded] = useState(false)

  const controlDiv1 = useAnimation();
  const controlDiv2 = useAnimation();
  
  useEffect(() => {
    controlDiv1.set({ opacity: 0 });
    controlDiv1.start({ 
        opacity: 1, 
        transition: { duration: 0.8, delay: 0.1, ease: easeIn } 
      });
    controlDiv2.set({ opacity: 0 });
    controlDiv2.start({ 
        opacity: 1, 
        transition: { duration: 0.8, delay: 0.1, ease: easeIn } 
      });
  }, [blankAlphaLoaded, controlDiv1, controlDiv2])

  return (
    <CustomShirtContainer>
      <DesignAlphaImgContainer
        initial={{opacity: 0}}
        animate={controlDiv1}
      >
        <ImgLoader src={designAlpha} alt={"design"} />
      </DesignAlphaImgContainer>
      <CustomGradient
        initial={{opacity: 0}}
        animate={controlDiv2}
        $topGradient={product.topGradient}
        $botGradient={product.botGradient}
      />
      <CustomShirtImgContainer>
        <ImgLoader src={blankAlpha} alt={"custom product"} updateParent={setBlankAlphaLoaded}/>
      </CustomShirtImgContainer>
    </CustomShirtContainer>
  )
}
