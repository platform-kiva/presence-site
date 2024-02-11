import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../media-breakpoints";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const CartContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;
`
export const CartItemDisplayContainer = styled.div`
    display: flex;
    position: absolute;
    top: 110px;

    @media ${device.mobileM} {
        align-items: center;
        height: 100vh;
        justify-content: center;
        position: absolute;
        top: 0;
        width: 100vw;
    }
`
export const CarouselBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 450px;
    right: 36px;
    top: 120px;
    width: 300px;
    z-index: 500;

    @media ${device.mobileM} {
        margin-top: 625px;
    }
`
export const CartItemLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CartItemDetailsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const DetailsLabel = styled.h4`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
`
export const CartItemIncDecContainer = styled.div`
    display: flex;
    gap: 20px;
    z-index: 500;
`
export const IndDecLabel = styled.h4`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    margin-top: 10px;
    text-decoration: underline;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
`
export const GradientBG = styled(motion.div)`
  background: ${(props) =>
    props.$cartItems && props.$cartItems[props.$cartInd] 
    ? `linear-gradient(
        45deg,
        rgba(
            ${props.$cartItems[props.$cartInd].botGradient[0]},
            ${props.$cartItems[props.$cartInd].botGradient[1]},
            ${props.$cartItems[props.$cartInd].botGradient[2]},
            0.8) 0%,
        rgba(
            ${props.$cartItems[props.$cartInd].topGradient[0]},
            ${props.$cartItems[props.$cartInd].topGradient[1]},
            ${props.$cartItems[props.$cartInd].topGradient[2]},
            0.8) 100%)`
    : undefined};
  height: 100%;
  position: fixed;
  transition: background-color 1s ease;
  width: 100%;
  z-index: -100;
`
export const CartDetailsContainer = styled.div`
    margin-top: 25px;
    width: 200px;
    z-index: 500;

    @media ${device.tablet} {
        margin-top: 50px;
    }
`