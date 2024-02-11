import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../media-breakpoints";

export const ShirtDisplayContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;

    @media ${device.mobileM} {
        margin: 20px;
    }

    @media (min-width: 568px) {
        margin: 0px;
    }
`
export const ShirtImgDisplayContainer = styled(motion.div)`
    height: 300px;
    width: 300px;

    @media ${device.mobileM} {
        height: 100%;
        width: 100%;
    }

    @media (min-width: 431px) {
        width: 300px;
        height: 300px;
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