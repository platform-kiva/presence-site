import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

// styles
import {
    ShirtImgDisplayContainer,
    GradientBox,
    ShirtMockupContainer
} from './ShirtImgDisplay.styles';

// assets
import blankShirtImg from '../../assets/clothing/blank_ALPHA.png';

// components
import GradientBG from '../gradient-bg/GradientBG';
import ImgLoader from "../img-loader/ImgLoader";

export default function ShirtImgDisplay({ updateParent=null }) {
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
                <GradientBG />
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
