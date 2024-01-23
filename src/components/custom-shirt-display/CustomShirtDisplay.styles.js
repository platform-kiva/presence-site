import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../media-breakpoints";

export const CustomShirtContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;
`
export const CustomGradient = styled(motion.div)`
    background: ${(props) =>
        props.$topGradient && props.$botGradient
        ? `linear-gradient(
            rgba(
                ${props.$topGradient[0]},
                ${props.$topGradient[1]},
                ${props.$topGradient[2]},
                0.5) 0%,
            rgba(
                ${props.$botGradient[0]},
                ${props.$botGradient[1]},
                ${props.$botGradient[2]},
                0.5) 100%)`
        : undefined};
    position: absolute;
    height: 20px;
    left: 50%;
    top: 62px;
    transform: translateX(-50%);
    width: 78px;
    z-index: 100;
    
    @media ${device.laptopL} {
        height: 28px;
        top: 72px;
        /* width: 109.2px; */
        width: 80px;
    }
`
export const CustomShirtImgContainer = styled(motion.div)`
    width: 175px; 

    @media ${device.laptopL} {
        width: 275px;
    }
`
export const ProductShadow = styled(motion.div)`
    background-color: rgba(0,0,0,0.175);
    border-radius: 50%;
    display: ${props => props.$isVisible ? "block" : "none"};
    filter: blur(7px);
    height: 27px;
    width: 175px;
`