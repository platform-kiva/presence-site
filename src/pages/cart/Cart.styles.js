import styled from "styled-components";
import { size, device } from "../../media-breakpoints";
import cursorIconFilled from '../../assets/icons/cursor_filled.png';

export const CartContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
`
export const CartHeaderContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 500;

    @media ${device.laptopL} {
        max-width: 1440px;
    }
`
export const CartItemDisplayContainer = styled.div`
    display: flex;
    position: absolute;

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
    position: absolute;
    max-width: 500px;
    width: 80%;
    z-index: 500;
`
export const QuantityControl = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 145px;

    @media (max-width: ${size.mobileL}) {
        top: 100px;
    }

    @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
        top: 120px
    }
`
export const CartItemLabelContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 5px;
`
export const DetailsLabel = styled.h3`
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
export const EmptyCartMessageContainer = styled.h2`
    left: 50%;
    max-width: 300px;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
`
