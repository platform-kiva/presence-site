import styled from "styled-components";
import cursorIcon from '../../assets/icons/cursor.png';
import cursorIconFilled from '../../assets/icons/cursor_filled.png';
import { motion } from "framer-motion";
import { device } from "../../media-breakpoints";

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    position: relative;
    width: 100%;
    z-index: 1000;

    @media ${device.tablet} {
        padding-top: 50px;
    }
`
export const SocialsBtnContainer = styled(motion.div)`
    display: flex;
    height: 20px;
    padding: 0px 30px;
    transform-origin: center;
    transition: 0.6s ease-out;
    width: 20px;
    
    &:hover {
        transform: scale(1.5);
        transition: 0.6s ease-out;
    }

    @media (min-width: 550px) {
        padding: 0px 50px;
    }

    @media ${device.tablet} {
        padding: 0px 66.5px;
    }

    @media ${device.laptop} {
        padding: 0px 120px;
    }
`
export const HeaderBtnImgContainer = styled.div`
    align-items: center;
    cursor: ${props =>
        props.$isVisible ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`
    };
    display: flex;
    justify-content: center;
    opacity: ${props => props.$isVisible ? "1.0" : "0.0"};
    position: relative;
    transition: 0.2s ease-out;

    img {
        width: 100%;
    }
`
export const CartBtnContainer = styled(motion.div)`
    display: flex;
    height: 20px;
    padding: 0px 30px;
    transform-origin: center;
    transition: 0.6s ease-out;
    width: 28px;
    
    &:hover {
        transform: scale(1.5);
        transition: 0.6s ease-out;
    }

    @media (min-width: 550px) {
        padding: 0px 50px;
    }

    @media ${device.tablet} {
        padding: 0px 66.5px;
    }

    @media ${device.laptop} {
        padding: 0px 120px;
    }
`
export const CartBtnImgContainer = styled(motion.div)`
    align-items: center;
    cursor: ${props => props.$isVisible ? `url(${cursorIconFilled}) 15 15, auto` : `url(${cursorIcon}) 15 15, auto`};
    display: flex;
    width: 50px;
    justify-content: center;
    opacity: ${props => props.$isVisible ? "1.0" : "0.0"};
    position: relative;
    transition: 0.2s ease-out;

    h4 {
        font-size: 12px;
        margin-top: 8px;
        position: absolute;
    }

    img {
        width: 100%;
    }
`