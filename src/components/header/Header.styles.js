import styled from "styled-components";
import cursorIcon from '../../assets/icons/cursor.png';
import cursorIconFilled from '../../assets/icons/cursor_filled.png';
import { motion } from "framer-motion";
import { device, size } from "../../media-breakpoints.js";

export const HeaderContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    position: relative;
    width: 100%;
    z-index: 1000;

    @media (max-width: ${size.tablet}) {
        padding-top: 30px;
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
    height: 20px;
    justify-content: center;
    opacity: ${props => props.$isVisible ? "1.0" : "0.0"};
    position: relative;
    transition: 0.2s ease-out;

    img {
        width: 20px;
    }
`
export const GiftShopBtnContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
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
        width: 28px;
    }
`
export const GiftShopNavBtnsContainer = styled.div`
    position: relative;
`
export const CartBtnContainer = styled.div`
    left: -15px;
    position: absolute;
    top: 45px;
`