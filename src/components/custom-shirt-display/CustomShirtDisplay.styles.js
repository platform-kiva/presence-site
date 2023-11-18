import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../media-breakpoints"

export const CustomShirtContainer = styled.div`
    position: relative;
`
export const DesignAlphaImgContainer = styled(motion.div)`
    // background-color: pink;
    position: absolute;
    left: 50%;
    top: 32px;
    transform: translateX(-50%);
    width: 78px;
    z-index: 200;
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
`
export const CustomShirtImgContainer = styled.div`
    width: 250px; 

    @media ${device.laptopL} {
        width: 350px;
    }
`