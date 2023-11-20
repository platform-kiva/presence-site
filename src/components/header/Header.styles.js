import styled from "styled-components";
import cursorIconFilled from '../../assets/icons/cursor_filled.png'
import { motion } from "framer-motion";
import { device } from "../../media-breakpoints";

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    width: 100%;
    z-index: 1000;
`
export const HeaderBtnContainer = styled(motion.div)`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    display: block;
    height: 20px;
    transform-origin: center;
    transition: 0.6s ease-out;
    width: 20px;
    &:hover {
        transform: scale(1.5);
        transition: 0.6s ease-out;
    }

    @media ${device.mobileS} {
        padding: 0px 46.5px;
    }

    @media ${device.tablet} {
        padding: 0px 66.5px;
    }

    @media ${device.laptop} {
        padding: 0px 120px;
    }
`