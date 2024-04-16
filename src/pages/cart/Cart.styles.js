import styled from "styled-components";
import { device, size } from "../../media-breakpoints";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const CartContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100%;
`
export const EmptyCartContent = styled.div`
    align-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    left: 50%;
    padding-bottom: 50px;
    position: absolute;
    max-width: 80%;
    top: 50%;
    transform: translate(-50%, -50%);
`
export const ProductBox = styled.div`
    align-items: center;
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px; 
    height: 375px;
    justify-content: center;
    transition: 0.4s ease-in;
    width: 300px;

    &:hover {
        background: rgba(255,255,255,0.2);
        border: 2px solid rgba(255,255,255,0.5);
        transition: 0.4s ease-in;
    }
`
export const InfoBtnContainer = styled.div`
    cursor: url(${cursorIconFilled}) 15 15, auto;
    position: absolute;
    right: 15px;
    top: 15px;

    img {
        height: 20px;
        transition: 0.4s ease-out;
        width: 20px;

        &:hover {
            transform: scale(1.25);
            transition: 0.4s ease-out;
        }
    }
`
export const ProductInfo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
`
export const CartItemDisplayContainer = styled.div`
    display: flex;
    position: absolute;
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

    @media (max-width: ${size.mobileS}) {
        width: 250px;
    }
    @media (min-width: ${size.mobileM}) {
        margin-top: 550px;
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
export const CartDetailsContainer = styled.div`
    margin-top: 25px;
    width: 200px;
    z-index: 500;

    @media ${device.tablet} {
        margin-top: 25px;
    }
`