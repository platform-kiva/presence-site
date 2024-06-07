import styled from "styled-components";
import { device, size } from "../../media-breakpoints.js";
import cursorLightFilled from '../../assets/icons/cursors/cursor-filled-light.png';

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

    @media (max-width: 468px) {
        top: 42%;
    }
`
export const PriceActionCustomContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${size.mobileL}) {
        height: 259px;
        justify-content: center;
    }
    @media (min-width: ${size.mobileL}) and (max-width: 500px) {
        height: 259px;
        justify-content: center;
    }
    @media (min-width: 500px) and (max-width: ${size.tablet}) {
        height: 185px;
    }

    .back-btn {
        cursor: url(${cursorLightFilled}) 15 15, auto;
        margin-top: 20px;
        text-decoration: underline;
    }
`
export const PriceAction = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
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
export const ShirtDisplayHolder = styled.div`
`