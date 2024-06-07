import styled from "styled-components";
import { device } from "../../media-breakpoints.js";
import { motion } from "framer-motion";

export const HomeContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    width: 100%;
`
export const HeaderContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    z-index: 500;

    @media ${device.laptopL} {
        max-width: 1440px;
    }
`
export const ControlsContainer = styled(motion.div)`
    bottom: ${props => props.$checker ? '30px' : '50%'};
    box-sizing: border-box;
    display: flex;
    padding: 0px 30px;
    position: absolute;
    transition: bottom 1s ease-in-out;
    transform: ${props => props.$checker ? 'translateY(0%)' : 'translateY(50%)'};
    max-width: 1440px;
    width: 100%;

    @media (min-width: 550px) {
        padding: 0px 50px;
    }

    @media ${device.tablet} {
        padding: 0px 66.5px;
    }

    @media ${device.laptop} {
        padding: 0px 120px;
    }

    @media ${device.laptopL} {
        bottom: ${props => props.$checker ? '50px' : '50%'};
        transition: bottom 1s ease-in-out;
    }
`