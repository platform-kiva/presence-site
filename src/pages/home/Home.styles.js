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
    bottom: ${props => props.$checker ? '30px' : '42%'};
    left: 50%;
    position: absolute;
    transform: translate(-50%);
    transition: bottom 1s ease-in-out;

    @media ${device.laptopL} {
        bottom: ${props => props.$checker ? '50px' : '42%'};
        transition: bottom 1s ease-in-out;
    }
`