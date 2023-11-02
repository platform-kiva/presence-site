import styled from "styled-components";
import { motion } from "framer-motion";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const PreLoaderContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`
export const PreLoaderBannerContainer = styled(motion.div)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
`
export const GradientBG = styled.div`
    background: ${props =>
        `linear-gradient(45deg,
            rgba(
                ${props.$products[props.$productInd].botGradient[0]},
                ${props.$products[props.$productInd].botGradient[1]},
                ${props.$products[props.$productInd].botGradient[2]},
                0.8) 0%,
            rgba(
                ${props.$products[props.$productInd].topGradient[0]},
                ${props.$products[props.$productInd].topGradient[1]},
                ${props.$products[props.$productInd].topGradient[2]},
                0.8) 88%)`
    };
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`