import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectDisplayedGradient, selectGradientA, selectGradientB } from '../../store/gradients/gradient.selector';

// styles
import {
    ShirtImgDisplayContainer,
    GradientBox,
    ShirtMockupContainer
} from './ShirtImgDisplay.styles';

// assets
import blankShirtImg from '../../assets/clothing/blank_ALPHA.png';

// components
import ImgLoader from "../img-loader/ImgLoader";

export default function ShirtImgDisplay({ updateParent=null }) {
    const controlDiv1 = useAnimation();
    const displayedGradient = useSelector(selectDisplayedGradient);
    const gradientA = useSelector(selectGradientA);
    const gradientB = useSelector(selectGradientB);

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
            <GradientBox $gradient={displayedGradient === 'A' ? gradientA : gradientB } animate={controlDiv1} />
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
