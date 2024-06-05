import styled from "styled-components";
import { size, device } from "../../media-breakpoints.js";

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
        height: fit-content;
        justify-content: center;
        position: absolute;
        top: 40%;
        transform: translate(0%, -50%);
        width: 100vw;
    }
`
export const CarouselBtnContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: absolute;
    max-width: 500px;
    top: 280px;
    width: 80%;
    z-index: 500;
`
export const ProductControlsContainer = styled.div`
    display: flex;
    gap: 20px;
    position: absolute;
    bottom: 250px;

    @media (max-width: ${size.mobileL}) {
        bottom: 250px;
    }

    @media (min-width: ${size.mobileL}) and (max-width: ${size.tablet}) {
        bottom: 250px
    }
`
export const ProductControl = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 186.29px;
`
export const CartItemLabelContainer = styled.div`
    align-items: center;
    display: flex;
    gap: 5px;
`
export const DetailsLabel = styled.h3`
    font-size: 20px;

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
export const EmptyCartMessageContainer = styled.h2`
    left: 50%;
    max-width: 300px;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 100%;
`
export const ControlsContainer = styled.div`
    bottom: 30px;
    left: 50%;
    position: absolute;
    transform: translate(-50%);

    @media ${device.laptopL} {
        bottom: 50px;
    }
`
export const CounterContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    width: 100%;
`
export const BtnsContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
export const BtnContainer = styled.div`
    height: 30px;
    width: 30px;
`
export const DisplayContainer = styled.div`
    height: 50px;
    width: 50px;
`
export const CounterLabel = styled.h4`
    font-size: 16px;
`