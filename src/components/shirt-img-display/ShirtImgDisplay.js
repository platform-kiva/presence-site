import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

// styles
import {
    ShirtImgDisplayContainer,
    GradientBox,
    ShirtMockupContainer
} from './ShirtImgDisplay.styles.js';

// assets
import blankShirtImg from '../../assets/clothing/blank_ALPHA.png';

// components
import GradientBG from '../gradient-bg/GradientBG.js';
import ImgLoader from "../img-loader/ImgLoader.js";

export default function ShirtImgDisplay({ updateParent=null, setGradient=null }) {
    const controlDiv1 = useAnimation();

    const [isShirtImgLoaded, setIsShirtImgLoaded] = useState(false);

    useEffect(() => {
        if (isShirtImgLoaded && updateParent) {
            updateParent(true)
        }
        controlDiv1.set({ opacity: 0 });
        controlDiv1.start({ 
          opacity: 1, 
          transition: { duration: 0.8, delay: 0.2 } 
        });
      }, [isShirtImgLoaded, controlDiv1, updateParent]);

    return (
        <ShirtImgDisplayContainer>
            <GradientBox animate={controlDiv1}>
                <GradientBG setGradient={setGradient ? setGradient : null} shirtDisplay={true} />
            </GradientBox>
            <ShirtMockupContainer>
                <ImgLoader
                    src={blankShirtImg}
                    alt={"blank shirt"}
                    updateParent={setIsShirtImgLoaded}
                />
            </ShirtMockupContainer>
        </ShirtImgDisplayContainer>
    )
}
