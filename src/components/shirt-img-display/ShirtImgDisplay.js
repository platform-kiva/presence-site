import { useEffect, useState } from 'react';
import { useAnimation } from 'framer-motion';

// styles
import {
    ShirtImgDisplayContainer,
    GradientBox,
    ShirtMockupContainer
} from './ShirtImgDisplay.styles';

// components
import ImgLoader from "../img-loader/ImgLoader";

export default function ShirtImgDisplay({ product, startColor=null, endColor=null, alphaStart=0.49, alphaEnd=0.56, updateParent=null }) {
    const controlDiv1 = useAnimation();

    const [isShirtImgLoaded, setIsShirtImgLoaded] = useState(false);

    useEffect(() => {
        if (isShirtImgLoaded && updateParent) {
            updateParent(true)
            console.log("parent updated")
        }
        if (isShirtImgLoaded) {
            console.log("isShirtImgLoaded is loaded")
        }
        controlDiv1.set({ opacity: 0 });
        controlDiv1.start({ 
          opacity: 1, 
          transition: { duration: 0.8, delay: 0.2 } 
        });
      }, [isShirtImgLoaded, controlDiv1, updateParent]);

    return (
        <ShirtImgDisplayContainer>
            <GradientBox
                animate={controlDiv1}
                style={{
                    background: `linear-gradient(0deg, 
                        ${startColor === null ? 
                            `rgba(
                                ${product.botGradient[0]}, 
                                ${product.botGradient[1]}, 
                                ${product.botGradient[2]}, ${alphaStart})`: startColor} 0%,
                        ${endColor === null ?
                            `rgba(
                                ${product.topGradient[0]}, 
                                ${product.topGradient[1]}, 
                                ${product.topGradient[2]}, ${alphaEnd})` : endColor} 100%)`
                }}
            />
            <ShirtMockupContainer>
                <ImgLoader
                    src={product.blankProductURL}
                    alt={"blank shirt"}
                    updateParent={setIsShirtImgLoaded}
                />
            </ShirtMockupContainer>
        </ShirtImgDisplayContainer>
    )
}
