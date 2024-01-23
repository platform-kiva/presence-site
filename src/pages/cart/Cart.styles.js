import styled from "styled-components";
import { motion } from "framer-motion";
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
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow-x: hidden;
    position: absolute;
    width: 100vw;
`
export const CarouselBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 600px;
    right: 36px;
    top: 120px;
    width: 300px;
    z-index: 500;
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
export const CartQuantity = styled.h1`
    color: rgba(0,0,0,0.1);
    margin-top: 20px;
    margin-bottom: 6px;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
`
export const GradientBG = styled(motion.div)`
  background: linear-gradient(
    45deg,
    rgba(219,120,212,0.8) 0%,
    rgba(32,172,232,0.8) 100%
  );
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
    margin-top: 20px;
    width: 200px;
    z-index: 500;
`