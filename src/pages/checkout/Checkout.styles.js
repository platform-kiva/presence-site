import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const BotNavBtnContainer = styled.div`
    backdrop-filter: blur(10px);
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.25) 100% );
    bottom: 0;
    display: flex;
    height: 150px;
    justify-content: center;
    position: fixed;
    width: 100vw;
`
export const CartOverviewContainer = styled.div`
`
export const GradientBG = styled.div`
    background: ${props =>
        `linear-gradient(45deg,
            rgba(
                ${props.$cartItems[props.$cartInd].botGradient[0]},
                ${props.$cartItems[props.$cartInd].botGradient[1]},
                ${props.$cartItems[props.$cartInd].botGradient[2]},
                0.8) 0%,
            rgba(
                ${props.$cartItems[props.$cartInd].topGradient[0]},
                ${props.$cartItems[props.$cartInd].topGradient[1]},
                ${props.$cartItems[props.$cartInd].topGradient[2]},
                0.8) 88%)`
    };
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
`